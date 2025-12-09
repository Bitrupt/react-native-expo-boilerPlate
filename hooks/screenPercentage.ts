// hooks/screenPercentage.ts
// Lightweight responsive helpers used across the boilerplate
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const wp = (percentage: number): number => (width * percentage) / 100;
export const hp = (percentage: number): number => (height * percentage) / 100;

export const spacing = {
  xs: wp(1),
  sm: wp(2),
  md: wp(4),
  lg: wp(6),
  xl: wp(8),
};

export const screenData = { width, height };
