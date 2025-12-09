import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import styles from './styles';

interface DepositTabsProps {
  activeTab: 'oneTime' | 'recurring';
  onTabChange: (tab: 'oneTime' | 'recurring') => void;
}

const DepositTabs: React.FC<DepositTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'oneTime' && styles.activeTab]}
        onPress={() => onTabChange('oneTime')}
      >
        <Text style={[styles.tabText, activeTab === 'oneTime' && styles.activeTabText]}>
          One Time
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'recurring' && styles.activeTab]}
        onPress={() => onTabChange('recurring')}
      >
        <Text style={[styles.tabText, activeTab === 'recurring' && styles.activeTabText]}>
          Recurring
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default DepositTabs;