// components/ThemeToggle/index.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { getThemeColors } from '@/constants/Colors';
import styles from './styles';

type Props = {
  size?: number;
  onPress?: () => void;
};

const ThemeToggle: React.FC<Props> = ({ size = 24, onPress }) => {
  const { isDark, toggleTheme } = useTheme();
  const colors = getThemeColors(isDark);

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress ?? toggleTheme}
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <Ionicons
        name={isDark ? 'sunny' : 'moon'}
        size={size}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;
