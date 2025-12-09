// app/(tabs)/goals/index.tsx - iOS FIXED VERSION

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import GoalCreateModal from '@/components/GoalCreateModal/GoalCreateModal';
import GoalsStatsSection from '@/components/GoalsStatsSection/GoalsStatsSection';
import GoalCard from '@/components/GoalCard/GoalCard';
import { Colors } from '@/constants/Colors';
import GoalIllustration from '@/assets/images/illustrations/goalIllustraion.png';
import styles from './styles';

interface Goal {
  id: string;
  name: string;
  type: 'retirement' | 'future-event' | "paydown-debt" | "general-investment";
  targetAmount: number;
  currentAmount: number;
  duration: string;
  monthlyRequired: number;
  tag: string;
  createdAt: string;
}

const GoalsScreen = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateGoal = (newGoal: Goal) => {
    setGoals(prev => [...prev, newGoal]);
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const totalGoals = goals.length;
  const archivedGoals = goals.filter(goal => goal.currentAmount >= goal.targetAmount).length;
  const progressPercentage = totalGoals > 0 ? Math.round((archivedGoals / totalGoals) * 100) : 0;

  if (goals.length === 0) {
    return (
      <>
        <View style={styles.container}>
          <ScreenHeader title="Goals" showBackButton={false} reducedPadding={true} />
          
          <View style={styles.emptyStateContainer}>
            <View style={styles.emptyStateContent}>
              <View style={styles.illustrationContainer}>
                <Image 
                source={GoalIllustration} 
                style={styles.illustration} 
                resizeMode="contain" 
              />
              </View>
              
              <Text style={styles.emptyTitle}>No Goals Created Yet</Text>
              <Text style={styles.emptySubtitle}>
              Click below to start creating your first goal to start{'\n'}saving and investment benefits
              </Text>
              
              <TouchableOpacity 
                style={styles.createFirstGoalButton}
                onPress={handleOpenCreateModal}
              >
                <View style={styles.plusIconContainer}>
                  <Ionicons name="add" size={24} color={Colors.common.white} />
                </View>
                <Text style={styles.createFirstGoalText}>Create First Goal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <GoalCreateModal
          visible={showCreateModal}
          onClose={handleCloseCreateModal}
          onCreateGoal={handleCreateGoal}
        />
      </>
    );
  }

  return (
    <>
      <View style={styles.containerWithGoals}>
        <ScreenHeader title="Goals" showBackButton={false} reducedPadding={true} />
        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <GoalsStatsSection
            totalGoals={totalGoals}
            archivedGoals={archivedGoals}
            progressPercentage={progressPercentage}
          />
          
          <View style={styles.goalsListContainer}>
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity 
          style={styles.addGoalButton}
          onPress={handleOpenCreateModal}
        >
          <Ionicons name="add" size={24} color={Colors.common.white} />
        </TouchableOpacity>
      </View>

      <GoalCreateModal
        visible={showCreateModal}
        onClose={handleCloseCreateModal}
        onCreateGoal={handleCreateGoal}
      />
    </>
  );
};

export default GoalsScreen;