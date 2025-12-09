import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from './styles';

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="gift" size={80} color={Colors.primary} />
        </View>
        
        <Text style={styles.title}>Rewards</Text>
        <Text style={styles.subtitle}>
          Earn rewards for your investment activities and achievements
        </Text>
        
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonText}>Coming Soon</Text>
        </View>
      </View>
    </View>
  );
};



export default RewardsScreen;