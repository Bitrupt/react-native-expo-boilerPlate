import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import styles from './styles';

interface AmountInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>How much you need to deposit?</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.currencySymbol}>£</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="50.00"
          placeholderTextColor={Colors.grayscale[600]}
          keyboardType="numeric"
          textAlign="center"
        />
      </View>
    </View>
  );
};



export default AmountInput;