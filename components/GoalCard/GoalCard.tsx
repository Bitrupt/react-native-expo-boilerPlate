import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Circle } from 'react-native-progress';
import { Colors } from '@/constants/Colors';
import FutureSelectionImage from "@/assets/images/goalFutureSelection.png";
import RetirementSelectionImage from "@/assets/images/goalRetirementSelection.png";
import PaydownSelectionImage from "@/assets/images/paydownSelection.png";
import InvestmentSelectionImage from "@/assets/images/investmentSelection.png";
import styles from './styles';

const { width, height } = Dimensions.get('window');

const wp = (percentage: number) => {
  return (width * percentage) / 100;
};

const hp = (percentage: number) => {
  return (height * percentage) / 100;
};

interface Goal {
  id: string;
  name: string;
  type: 'retirement' | 'future-event' | 'paydown-debt' | 'general-investment';
  targetAmount: number;
  currentAmount: number;
  duration: string;
  monthlyRequired: number;
  tag: string;
  createdAt: string;
}

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  const progressPercentage = Math.round((goal.currentAmount / goal.targetAmount) * 100);
  const progressDecimal = progressPercentage / 100; // Convert to decimal for library
  
  const getGoalIcon = (type: string) => {
    switch (type) {
      case 'retirement':
        return RetirementSelectionImage;
      case 'future-event':
        return FutureSelectionImage;
      case 'paydown-debt':
        return PaydownSelectionImage;
      case 'general-investment':
        return InvestmentSelectionImage;
      default:
        return FutureSelectionImage;
    }
  };

  const formatAmount = (amount: number) => {
    return `£${amount.toLocaleString()}`;
  };



  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.goalInfo}>
          {/* Goal Icon */}
          <Image source={getGoalIcon(goal.type)} style={styles.illustration} resizeMode="contain" />

          {/* Goal Name */}
          <Text style={styles.goalName}>{goal.name}</Text>
          
          {/* Amount Progress */}
          <Text style={styles.amountText}>
            {formatAmount(goal.currentAmount)}/{formatAmount(goal.targetAmount)}
          </Text>
          
          {/* Duration */}
          <Text style={styles.durationText}>{goal.duration}</Text>
          
          {/* Monthly Required */}
          <Text style={styles.monthlyText}>
            {formatAmount(goal.monthlyRequired)}/month required
          </Text>
          
          {/* Tag */}
          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{goal.tag}</Text>
          </View>
        </View>
      
      {/* Right Section - Progress Circle with Library */}
      <View style={styles.rightSection}>
        <View style={styles.progressContainer}>
          <Circle
            size={wp(15)}
            progress={progressDecimal}
            thickness={wp(1.2)}
            color={Colors.common.white}
            unfilledColor={Colors.grayscale[600]}
            borderWidth={0}
            showsText={false}
            animated={true}
          />
          <Text style={styles.progressText}>{progressPercentage}%</Text>
        </View>
      </View>

      </View>
    </View>
  );
};

export default GoalCard;