import React from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';

// Set this flag to true/false to force navigation without relying on auth state.
// When null, the real auth status from the store is used.
const AUTH_OVERRIDE: boolean | null = null;

const Index = () => {
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const { isAuthenticated, initialized } = useAuth();
  const resolvedAuth =
    typeof AUTH_OVERRIDE === 'boolean' ? AUTH_OVERRIDE : isAuthenticated;

  if (!initialized) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return <Redirect href={resolvedAuth ? '/(tabs)/home' : '/(auth)/login'} />;
};

export default Index;
