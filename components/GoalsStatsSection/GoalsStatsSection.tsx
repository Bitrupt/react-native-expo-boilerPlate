import React from 'react';
import { View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Circle } from 'react-native-progress';
import { Colors } from '@/constants/Colors';
import styles from './styles';
import { wp } from '@/hooks/screenPercentage';


interface GoalsStatsSectionProps {
  totalGoals: number;
  archivedGoals: number;
  progressPercentage: number;
}

const GoalsStatsSection: React.FC<GoalsStatsSectionProps> = ({
  totalGoals,
  archivedGoals,
  progressPercentage
}) => {
  // Convert percentage to decimal for the library
  const progressDecimal = progressPercentage / 100;



  return (
    <LinearGradient
      colors={[Colors.gradient.start, Colors.gradient.end]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Progress Circle using react-native-progress */}
      <View style={styles.progressContainer}>
        <Circle
          size={wp(25)}
          progress={progressDecimal}
          thickness={wp(2)}
          color={Colors.common.white}
          unfilledColor="rgba(255, 255, 255, 0.2)"
          borderWidth={0}
          showsText={false}
          animated={true}
        />
        <Text style={styles.progressText}>{progressPercentage}%</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Total Goals</Text>
          <Text style={styles.statValue}>{totalGoals}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Goals Archived</Text>
          <Text style={styles.statValue}>{archivedGoals}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default GoalsStatsSection;