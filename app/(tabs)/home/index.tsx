// app/(tabs)/home/index.tsx - iOS FIXED VERSION

import React from 'react';
import { ScrollView, View } from 'react-native';
import HomeHeader from '@/components/HomeHeader/HomeHeader';
import GoalAchieved from '@/components/GoalAchieved/GoalAchieved';
import ActionButtons from '@/components/ActionButtons/ActionButtons';
import ClaimPoints from '@/components/ClaimPoints/ClaimPoints';
import PortfolioTabs from '@/components/PortfolioTabs/PortfolioTabs';
import { Colors } from '@/constants/Colors';
import styles from './styles';

const HomeScreen = () => {
  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleClaimPoints = () => {
    console.log('Claim points pressed');
  };

  return (
    <View style={styles.container}>
      <HomeHeader onNotificationPress={handleNotificationPress} />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.wrapper}>
        <GoalAchieved amount={10572.00} progress={75} />
        
        <ActionButtons />
        
        <ClaimPoints points={200} onPress={handleClaimPoints} />
        </View>
        
        <View style={styles.portfolioSection}>
          <PortfolioTabs />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;