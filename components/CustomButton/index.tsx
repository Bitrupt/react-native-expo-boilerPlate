// components/CustomButton/index.tsx
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import styles from './styles';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

type Props = {
  label: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const CustomButton: React.FC<Props> = ({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}) => {
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);

  const resolved = (() => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          textColor: colors.btnText,
          borderColor: colors.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          textColor: colors.text,
          borderColor: colors.border,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          textColor: colors.text,
          borderColor: 'transparent',
        };
      default:
        return {
          backgroundColor: colors.primary,
          textColor: colors.btnText,
          borderColor: colors.primary,
        };
    }
  })();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: resolved.backgroundColor,
          borderColor: resolved.borderColor,
          opacity: disabled ? 0.6 : 1,
        },
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.9}
    >
      {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
      {loading ? (
        <ActivityIndicator color={resolved.textColor} />
      ) : (
        <Text style={[styles.text, { color: resolved.textColor }, textStyle]}>
          {label}
        </Text>
      )}
      {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
    </TouchableOpacity>
  );
};

export default CustomButton;
