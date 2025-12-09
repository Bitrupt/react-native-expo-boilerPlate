// contexts/ThemeContext.tsx
// Simple, persistent theme controller with light/dark/system modes
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/useColorScheme';

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: 'light' | 'dark';
  themeMode: ThemeMode;
  isDark: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
};

const STORAGE_KEY = '@boilerplate_theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemScheme = useColorScheme('light');
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [theme, setTheme] = useState<'light' | 'dark'>(
    systemScheme === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
          setThemeModeState(stored);
        }
      } catch (error) {
        console.warn('Unable to load theme preference', error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const resolved =
      themeMode === 'system'
        ? systemScheme === 'dark'
          ? 'dark'
          : 'light'
        : themeMode;
    setTheme(resolved);
  }, [themeMode, systemScheme]);

  const setThemeMode = useCallback(async (mode: ThemeMode) => {
    setThemeModeState(mode);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn('Unable to persist theme preference', error);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      themeMode,
      isDark: theme === 'dark',
      toggleTheme,
      setThemeMode,
    }),
    [theme, themeMode, toggleTheme, setThemeMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
