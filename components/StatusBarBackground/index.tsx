// components/StatusBarBackground/index.tsx
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStatusBar } from '@/contexts/StatusBarContext';
import styles from './styles';

const StatusBarBackground: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { backgroundColor } = useStatusBar();

  if (backgroundColor === 'transparent') return null;

  return (
    <View
      pointerEvents="none"
      style={[
        styles.container,
        {
          height: insets.top,
          backgroundColor,
        },
      ]}
    />
  );
};

export default StatusBarBackground;
