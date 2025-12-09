import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', color }) => {
  return (
    <View style={styles.container}>
      <View style={[
        styles.logoIcon, 
        styles[size],
        color && { backgroundColor: color }
      ]}>
        <Text style={[styles.logoText, styles[`${size}Text`]]}>IW</Text>
      </View>
    </View>
  );
};

export default Logo;