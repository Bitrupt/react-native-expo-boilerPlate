import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import styles from './styles';

interface RecurringOptionsProps {
  selectedFrequency: 'weekly' | 'monthly' | 'quarterly';
  onFrequencyChange: (frequency: 'weekly' | 'monthly' | 'quarterly') => void;
}

const RecurringOptions: React.FC<RecurringOptionsProps> = ({ 
  selectedFrequency, 
  onFrequencyChange 
}) => {
  const frequencies = [
    { key: 'weekly' as const, label: 'Weekly' },
    { key: 'monthly' as const, label: 'Monthly' },
    { key: 'quarterly' as const, label: 'Quarterly' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recurring Frequency</Text>
      <View style={styles.frequencyContainer}>
        {frequencies.map((frequency) => (
          <TouchableOpacity
            key={frequency.key}
            style={[
              styles.frequencyOption,
              selectedFrequency === frequency.key && styles.selectedFrequency
            ]}
            onPress={() => onFrequencyChange(frequency.key)}
          >
            <Text style={[
              styles.frequencyText,
              selectedFrequency === frequency.key && styles.selectedFrequencyText
            ]}>
              {frequency.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.description}>
        Your deposit will be automatically processed {selectedFrequency} starting from your selected date.
      </Text>
    </View>
  );
};


export default RecurringOptions;