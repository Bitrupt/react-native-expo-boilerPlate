import { StyleSheet, Dimensions } from "react-native"
import { Colors } from "@/constants/Colors"

const { width, height } = Dimensions.get("window")

const wp = (percentage: number) => {
  return (width * percentage) / 100
}

const hp = (percentage: number) => {
  return (height * percentage) / 100
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: Colors.grayscale[900],
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    maxHeight: hp(80),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayscale[800],
  },
  closeButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: wp(4.5),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
  },
  spacer: {
    width: wp(10),
  },
  content: {
    paddingVertical: hp(2.5),
    paddingBottom: hp(2),
  },

  centerLine: {
    width: wp(15),
    height: hp(0.5),
    backgroundColor: Colors.grayscale[600],
    borderRadius: wp(0.5),
    alignSelf: "center",
    marginBottom: hp(2.5),
  },

  horizontalLine: {
    width: "100%",
    height: hp(0.1),
    backgroundColor: Colors.grayscale[700],
    marginBottom: hp(2.5),
    marginTop: hp(1.2),
  },

  title: {
    fontSize: wp(5),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
    textAlign: "center",
    marginBottom: hp(3),
  },

  optionsContainer: {
    marginBottom: hp(1.5),
  },
  horizontalScrollContainer: {
    paddingHorizontal: wp(2.5),
    gap: wp(3),
  },

  optionCard: {
    backgroundColor: Colors.grayscale[800],
    borderRadius: wp(3),
    padding: wp(2),
    borderWidth: 1,
    borderColor: "transparent",
    width: wp(38),
    height: 'auto',
    justifyContent: "flex-start",
  },
  selectedOptionCard: {
    backgroundColor:Colors.grayscale[800],
    borderColor: Colors.primary,
  },

  optionContent: {
    alignItems: "center",
    height: hp(20),
    justifyContent: "flex-start",
  },

  optionIcon: {
    height: hp(6),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(1),
  },
  optionEmoji: {
    fontSize: wp(8),
  },
  optionTitle: {
    fontSize: wp(3.5),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
    textAlign: "center",
    height: hp(2.5),
    lineHeight: hp(2.5),
    marginBottom: hp(1),
  },
  selectedOptionTitle: {
    color: Colors.common.white,
  },
  optionDescription: {
    fontSize: wp(3),
    fontFamily: "Inter_400Regular",
    color: Colors.common.white,
    textAlign: "center",
    lineHeight: hp(2),
    height: hp(4),
    marginBottom: hp(1.5),
  },

  selectButtonContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    backgroundColor: Colors.grayscale[800],
    borderColor:Colors.grayscale[700],
    borderWidth:1,
    alignSelf: "center",
    position: "absolute",
    bottom: hp(2),
    left: wp(4),
    right: wp(4),
  },
  selectedButtonContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(5),
    backgroundColor: Colors.backgrounds.primary,
    borderWidth:0,
    alignSelf: "center",
    position: "absolute",
    bottom: hp(2),
    left: wp(4),
    right: wp(4),
  },
  selectButtonText: {
    fontSize: wp(3.2),
    fontFamily: "Inter_500Medium",
    color: Colors.grayscale[400],
    textAlign: "center",
  },
  selectedSelectButtonText: {
    color: Colors.primary,
  },

  formContainer: {
    maxHeight: hp(37),
    // marginBottom: hp(3),
    paddingHorizontal: wp(5),
  },
  inputContainer: {
    marginBottom: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: Colors.grayscale[800],
    borderWidth: 0,
    borderColor: Colors.grayscale[700],
    position: "relative",
  },
  inputLabel: {
    fontSize: wp(3),
    fontFamily: "Inter_600SemiBold",
    color: Colors.grayscale[400],
    paddingHorizontal: wp(4),
    marginTop: hp(1.2),
    paddingBottom: 0,
  },
  input: {
    fontFamily: "Inter_400Regular",
    color: Colors.common.white,
    paddingHorizontal: wp(4),
    paddingBottom: hp(1.5),
    fontSize: wp(4),
  },

  datePickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4),
    paddingBottom: hp(1.5),
  },
  datePickerText: {
    fontFamily: "Inter_400Regular",
    color: Colors.common.white,
    fontSize: wp(4),
    flex: 1,
  },
  datePickerPlaceholder: {
    color: Colors.grayscale[600], 
  },

  // Calendar Modal Styles
  calendarModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: wp(5),
  },
  calendarModalContainer: {
    backgroundColor: Colors.grayscale[900],
    borderRadius: wp(4),
    padding: wp(5),
    width: wp(85),
    maxHeight: hp(60),
  },

  // Year Navigation
  yearNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(3),
    paddingHorizontal: wp(3),
  },
  yearText: {
    fontSize: wp(5),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
  },

  // Month Grid (3x4 layout)
  monthGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: hp(3),
  },
  monthGridButton: {
    width: "30%",
    paddingVertical: hp(2),
    marginBottom: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: Colors.grayscale[800],
    alignItems: "center",
    justifyContent: "center",
  },
  selectedMonthGridButton: {
    backgroundColor: Colors.primary,
  },
  pastMonthGridButton: {
    backgroundColor: Colors.grayscale[700],
    opacity: 0.5,
  },
  monthGridButtonText: {
    fontSize: wp(3.5),
    fontFamily: "Inter_500Medium",
    color: Colors.common.white,
  },
  selectedMonthGridButtonText: {
    color: Colors.common.white,
    fontFamily: "Inter_600SemiBold",
  },
  pastMonthGridButtonText: {
    color: Colors.grayscale[400],
  },

  // Calendar Actions
  calendarActions: {
    flexDirection: "row",
    gap: wp(3),
  },
  cancelButton: {
    flex: 1,
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: Colors.grayscale[700],
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: wp(4),
    fontFamily: "Inter_500Medium",
    color: Colors.common.white,
  },
  confirmButtonCalendar: {
    flex: 1,
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  confirmButtonText: {
    fontSize: wp(4),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
  },
  disabledButton: {
    backgroundColor: Colors.grayscale[600],
  },
  disabledButtonText: {
    color: Colors.grayscale[400],
  },

  // Success styles
  successContainer: {
    alignItems: "center",
    marginBottom: hp(2),
  },
  successIconContainer: {
    marginBottom: hp(2.5),
  },
  checkmarkContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  successTitle: {
    fontSize: wp(4.5),
    fontFamily: "Inter_600SemiBold",
    color: Colors.common.white,
    textAlign: "center",
  },

  // Button
  confirmButton: {
    height: hp(6.2),
    marginHorizontal: wp(5),
  },

  // Illustration
  illustration: {
    width: wp(10),
    height: hp(5),
  },
})

export default styles
