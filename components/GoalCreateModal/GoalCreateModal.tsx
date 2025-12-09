import type React from "react"
import { useState } from "react"
import { View, Text, Modal, TouchableOpacity, TextInput, ScrollView, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import CustomButton from "@/components/CustomButton/CustomButton"
import { Colors } from "@/constants/Colors"
import FutureSelectionImage from "@/assets/images/goalFutureSelection.png"
import RetirementSelectionImage from "@/assets/images/goalRetirementSelection.png"
import PaydownSelectionImage from "@/assets/images/paydownSelection.png"
import InvestmentSelectionImage from "@/assets/images/investmentSelection.png"
import styles from "./styles"

interface Goal {
  id: string
  name: string
  type: "retirement" | "future-event" | "paydown-debt" | "general-investment"
  targetAmount: number
  currentAmount: number
  duration: string
  monthlyRequired: number
  tag: string
  createdAt: string
}

interface GoalCreateModalProps {
  visible: boolean
  onClose: () => void
  onCreateGoal: (goal: Goal) => void
}

type ModalStep = "select-type" | "goal-details" | "success"
type GoalType = "retirement" | "future-event" | "paydown-debt" | "general-investment"

const GoalCreateModal: React.FC<GoalCreateModalProps> = ({ visible, onClose, onCreateGoal }) => {
  const [currentStep, setCurrentStep] = useState<ModalStep>("select-type")
  const [selectedType, setSelectedType] = useState<GoalType | null>(null)
  const [goalName, setGoalName] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)
  const [createdGoalName, setCreatedGoalName] = useState("")

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [tempSelectedYear, setTempSelectedYear] = useState<number | null>(null)
  const [tempSelectedMonth, setTempSelectedMonth] = useState<number | null>(null)

  const goalTypes = [
    {
      key: "retirement" as const,
      title: "Retirement",
      description: "Departure to attention pronounce satisfied",
      image: RetirementSelectionImage,
    },
    {
      key: "future-event" as const,
      title: "Future Event",
      description: "Their could can widen ten she any",
      image: FutureSelectionImage,
    },
    {
      key: "paydown-debt" as const,
      title: "Paydown Debt",
      description: "Reduce and eliminate your debts",
      image: PaydownSelectionImage,
    },
    {
      key: "general-investment" as const,
      title: "General Investment",
      description: "Build wealth through investments",
      image: InvestmentSelectionImage,
    },
  ]

  const handleNumericInput = (text: string) => {
    const numericValue = text.replace(/[^0-9.]/g, '')
    const parts = numericValue.split('.')
    if (parts.length > 2) {
      return parts[0] + '.' + parts.slice(1).join('')
    }
    if (parts[1] && parts[1].length > 2) {
      return parts[0] + '.' + parts[1].substring(0, 2)
    }
    setTargetAmount(numericValue)
  }

  const resetModal = () => {
    setCurrentStep("select-type")
    setSelectedType(null)
    setGoalName("")
    setTargetAmount("")
    setDuration("")
    setSelectedDate("")
    setCreatedGoalName("")
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  const handleTypeSelect = (type: GoalType) => {
    setSelectedType(type)
  }

  const handleConfirmType = () => {
    if (selectedType) {
      setCurrentStep("goal-details")
    }
  }

  const calculateDuration = (targetDate: string): string => {
    const now = new Date()
    const [year, month] = targetDate.split("-").map(Number)
    const target = new Date(year, month - 1, 1)

    const diffTime = target.getTime() - now.getTime()
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))

    if (diffMonths < 0) {
      return "0 months"
    } else if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths === 1 ? "" : "s"}`
    } else {
      const years = Math.floor(diffMonths / 12)
      const remainingMonths = diffMonths % 12

      if (remainingMonths === 0) {
        return `${years} year${years === 1 ? "" : "s"}`
      } else {
        return `${years} year${years === 1 ? "" : "s"}, ${remainingMonths} month${remainingMonths === 1 ? "" : "s"}`
      }
    }
  }

  const handleMonthYearSelect = (year: number, month: number) => {
    setTempSelectedYear(year)
    setTempSelectedMonth(month)
  }

  const handleConfirmDate = () => {
    if (tempSelectedYear !== null && tempSelectedMonth !== null) {
      const dateString = `${tempSelectedYear}-${String(tempSelectedMonth + 1).padStart(2, "0")}`

      setSelectedDate(dateString)
      const calculatedDuration = calculateDuration(dateString)
      setDuration(calculatedDuration)
      setShowCalendar(false)
      setTempSelectedYear(null)
      setTempSelectedMonth(null)
    }
  }

  const handleCancelDate = () => {
    setShowCalendar(false)
    setTempSelectedYear(null)
    setTempSelectedMonth(null)
  }

  const navigateYear = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentYear((prev) => prev + 1)
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const renderCalendarModal = () => {
    const currentDate = new Date()
    const currentYearMonth = currentDate.getFullYear() * 12 + currentDate.getMonth()

    return (
      <Modal visible={showCalendar} transparent animationType="fade" onRequestClose={handleCancelDate}>
        <View style={styles.calendarModalOverlay}>
          <View style={styles.calendarModalContainer}>
            <View style={styles.yearNavigation}>
              <TouchableOpacity onPress={() => navigateYear("prev")}>
                <Ionicons name="chevron-back" size={24} color={Colors.primary} />
              </TouchableOpacity>
              <Text style={styles.yearText}>{currentYear}</Text>
              <TouchableOpacity onPress={() => navigateYear("next")}>
                <Ionicons name="chevron-forward" size={24} color={Colors.primary} />
              </TouchableOpacity>
            </View>

            <View style={styles.monthGrid}>
              {months.map((month, index) => {
                const monthYearValue = currentYear * 12 + index
                const isPast = monthYearValue <= currentYearMonth
                const isSelected = tempSelectedYear === currentYear && tempSelectedMonth === index

                return (
                  <TouchableOpacity
                    key={month}
                    style={[
                      styles.monthGridButton,
                      isSelected && styles.selectedMonthGridButton,
                      isPast && styles.pastMonthGridButton,
                    ]}
                    onPress={() => {
                      if (!isPast) {
                        handleMonthYearSelect(currentYear, index)
                      }
                    }}
                    disabled={isPast}
                  >
                    <Text
                      style={[
                        styles.monthGridButtonText,
                        isSelected && styles.selectedMonthGridButtonText,
                        isPast && styles.pastMonthGridButtonText,
                      ]}
                    >
                      {month.substring(0, 3)}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>

            <View style={styles.calendarActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelDate}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.confirmButtonCalendar,
                  (tempSelectedYear === null || tempSelectedMonth === null) && styles.disabledButton,
                ]}
                onPress={handleConfirmDate}
                disabled={tempSelectedYear === null || tempSelectedMonth === null}
              >
                <Text
                  style={[
                    styles.confirmButtonText,
                    (tempSelectedYear === null || tempSelectedMonth === null) && styles.disabledButtonText,
                  ]}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  const calculateMonthlyRequired = (target: number, durationText: string): number => {
    const months = calculateTotalMonths(durationText)
    return Math.ceil(target / Math.max(1, months))
  }

  const calculateTotalMonths = (durationText: string): number => {
    const now = new Date()
    const [year, month] = selectedDate.split("-").map(Number)
    const target = new Date(year, month - 1, 1)

    const diffMonths = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth())
    return Math.max(1, diffMonths)
  }

  const handleCreateGoal = () => {
    if (goalName.trim() && targetAmount && duration && selectedType) {
      const target = Number.parseFloat(targetAmount)
      const monthlyRequired = calculateMonthlyRequired(target, duration)

      const getTag = (type: GoalType) => {
        switch (type) {
          case "retirement":
            return "Retirement Plan"
          case "future-event":
            return "Long-term Saving"
          case "paydown-debt":
            return "Debt Reduction"
          case "general-investment":
            return "Investment Growth"
          default:
            return "Financial Goal"
        }
      }

      const newGoal: Goal = {
        id: Date.now().toString(),
        name: goalName.trim(),
        type: selectedType,
        targetAmount: target,
        currentAmount: 0,
        duration: duration,
        monthlyRequired,
        tag: getTag(selectedType),
        createdAt: new Date().toISOString(),
      }

      setCreatedGoalName(goalName)
      onCreateGoal(newGoal)
      setCurrentStep("success")
    }
  }

  const handleSuccessClose = () => {
    resetModal()
    onClose()
  }

  const isFormValid = goalName.trim().length > 0 && targetAmount.length > 0 && duration.length > 0

  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return "Select target month"
    const [year, month] = dateString.split("-")
    const monthName = months[Number.parseInt(month) - 1]
    return `${monthName} ${year}`
  }

  const isShowingPlaceholder = !duration

  const renderSelectType = () => (
    <>
      <View style={styles.centerLine} />

      <Text style={styles.title}>Choose Your Goal Type</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
        style={styles.optionsContainer}
      >
        {goalTypes.map((goalType) => (
          <TouchableOpacity
            key={goalType.key}
            style={[styles.optionCard, selectedType === goalType.key && styles.selectedOptionCard]}
            onPress={() => handleTypeSelect(goalType.key)}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionIcon}>
                <Image source={goalType.image} style={styles.illustration} resizeMode="contain" />
              </View>
              <Text style={[styles.optionTitle, selectedType === goalType.key && styles.selectedOptionTitle]}>
                {goalType.title}
              </Text>
              <Text style={styles.optionDescription}>{goalType.description}</Text>
            </View>

            <View style={[styles.selectButtonContainer, selectedType === goalType.key && styles.selectedButtonContainer]}>
              <Text style={[styles.selectButtonText, selectedType === goalType.key && styles.selectedSelectButtonText]}>
                {selectedType === goalType.key ? "Selected" : "Select"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.horizontalLine} />

      <CustomButton
        label="Confirm"
        onPress={handleConfirmType}
        disabled={!selectedType}
        backgroundColor={selectedType ? Colors.primary : Colors.grayscale[600]}
        buttonStyle={styles.confirmButton}
      />
    </>
  )

  const renderGoalDetails = () => (
    <>
      <View style={styles.centerLine} />

      <Text style={styles.title}>
        {selectedType === "retirement"
          ? "Retirement"
          : selectedType === "future-event"
            ? "Future Event"
            : selectedType === "paydown-debt"
              ? "Paydown Debt"
              : "General Investment"}{" "}
        Goal Details
      </Text>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Goal Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter goal name"
            placeholderTextColor={Colors.grayscale[600]}
            value={goalName}
            onChangeText={setGoalName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Set Money Target</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter target amount"
            placeholderTextColor={Colors.grayscale[600]}
            value={targetAmount}
            onChangeText={handleNumericInput}
            keyboardType="decimal-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Duration of the Goal</Text>
          <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowCalendar(!showCalendar)}>
          <Text style={[
              styles.datePickerText,
              isShowingPlaceholder && styles.datePickerPlaceholder
            ]}>
              {duration ? `${duration} (${formatDateDisplay(selectedDate)})` : "Select target month"}
            </Text>
            <Ionicons name={showCalendar ? "chevron-up" : "chevron-down"} size={20} color={Colors.common.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.horizontalLine} />

      <CustomButton
        label="Create Goal"
        onPress={handleCreateGoal}
        disabled={!isFormValid}
        backgroundColor={isFormValid ? Colors.primary : Colors.grayscale[600]}
        buttonStyle={styles.confirmButton}
      />
    </>
  )

const renderSuccess = () => (
  <>
    <View style={styles.centerLine} />
    <View style={styles.successContainer}>
      <View style={styles.successIconContainer}>
        <View style={styles.checkmarkContainer}>
          <Ionicons name="ellipse" size={64} color={Colors.primary} />
          <Ionicons name="checkmark" size={32} color={Colors.common.white} style={styles.checkmarkIcon} />
        </View>
      </View>
      <Text style={styles.successTitle}>New Goal Has Been Created</Text>
    </View>

    <View style={styles.horizontalLine} />

    <CustomButton
      label="Close"
      onPress={handleSuccessClose}
      backgroundColor={Colors.primary}
      buttonStyle={styles.confirmButton}
    />
  </>
)

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={handleClose} />
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            {currentStep === "select-type" && renderSelectType()}
            {currentStep === "goal-details" && renderGoalDetails()}
            {currentStep === "success" && renderSuccess()}
          </View>
        </View>
        {renderCalendarModal()}
      </View>
    </Modal>
  )
}

export default GoalCreateModal