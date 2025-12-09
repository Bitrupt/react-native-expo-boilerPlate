import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Colors } from '@/constants/Colors';
import styles from './styles';

interface GoalAchievedProps {
  amount: number;
  progress: number; // 0-100
}

const GoalAchieved: React.FC<GoalAchievedProps> = ({ amount, progress }) => {
  const radius = 35;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.heading}>Goal Achieved</Text>
        <Text style={styles.amount}>£ {amount.toLocaleString()}</Text>
      </View>
      
      <View style={styles.progressContainer}>
        <Svg width={80} height={80}>
          <Circle
            cx={40}
            cy={40}
            r={radius}
            stroke={Colors.grayscale[600]}
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity={0.3}
          />
          <Circle
            cx={40}
            cy={40}
            r={radius}
            stroke={Colors.common.white}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 40 40)`}
          />
        </Svg>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
};

export default GoalAchieved;