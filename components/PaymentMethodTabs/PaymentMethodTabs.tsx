import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface PaymentMethodTabsProps {
  selectedMethod: 'card' | 'bank';
  onMethodChange: (method: 'card' | 'bank') => void;
}

const PaymentMethodTabs: React.FC<PaymentMethodTabsProps> = ({ 
  selectedMethod, 
  onMethodChange 
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, selectedMethod === 'card' && styles.activeTab]}
        onPress={() => onMethodChange('card')}
      >
        <Text style={[styles.tabText, selectedMethod === 'card' && styles.activeTabText]}>
          Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedMethod === 'bank' && styles.activeTab]}
        onPress={() => onMethodChange('bank')}
      >
        <Text style={[styles.tabText, selectedMethod === 'bank' && styles.activeTabText]}>
          Bank Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grayscale[900],
    borderRadius: 25,
    padding: 0,
    marginBottom: 22,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.primary + '20',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: Colors.grayscale[400],
  },
  activeTabText: {
    color: Colors.primary,
  },
});

export default PaymentMethodTabs;