import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/**
 * Width percentage to pixels
 * @param percentage - Percentage of screen width (0-100)
 * @returns Pixel value
 */
export const wp = (percentage: number): number => {
  return (width * percentage) / 100;
};

/**
 * Height percentage to pixels
 * @param percentage - Percentage of screen height (0-100)
 * @returns Pixel value
 */
export const hp = (percentage: number): number => {
  return (height * percentage) / 100;
};

/**
 * Get screen dimensions
 */
export const screenData = {
  width,
  height,
};

/**
 * Responsive font size based on screen width
 * @param size - Base font size
 * @returns Responsive font size
 */
export const rf = (size: number): number => {
  return wp(size);
};

/**
 * Check if device is tablet (width > 768)
 */
export const isTablet = (): boolean => {
  return width > 768;
};

/**
 * Get responsive spacing
 */
export const spacing = {
  xs: wp(1),
  sm: wp(2),
  md: wp(4),
  lg: wp(6),
  xl: wp(8),
  xxl: wp(10),
};