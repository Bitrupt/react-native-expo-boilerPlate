import React, { useEffect } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import {
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
} from '@expo-google-fonts/outfit';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import StatusBarBackground from '@/components/StatusBarBackground';
import { getThemeColors } from '@/constants/Colors';
import { StatusBarProvider } from '@/contexts/StatusBarContext';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';
import { store } from '@/redux/store/store';

const AppShell = () => {
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const { initialized, initializeAuth } = useAuth();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

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
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <StatusBarProvider
        defaultColor={colors.statusBar}
        defaultIconStyle={isDark ? 'light' : 'dark'}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <SafeAreaView
              style={{ flex: 1, backgroundColor: colors.background }}
              edges={['top', 'left', 'right']}
            >
              <StatusBarBackground />
              <Slot />
            </SafeAreaView>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </StatusBarProvider>
    </NavigationThemeProvider>
  );
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
  });

  const colors = getThemeColors(false);

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </Provider>
  );
}
