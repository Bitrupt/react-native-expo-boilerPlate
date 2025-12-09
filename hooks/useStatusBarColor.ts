// hooks/useStatusBarColor.ts
// Keep status bar colors in sync with the active screen and theme
import { useCallback, useEffect } from 'react';
import { useFocusEffect } from 'expo-router';
import { getStatusBarColor, StatusBarScreen } from '@/constants/Colors';
import { useStatusBar } from '@/contexts/StatusBarContext';
import { useTheme } from '@/contexts/ThemeContext';

type Options = {
  screen?: StatusBarScreen;
  customColor?: string;
  iconStyle?: 'light' | 'dark';
};

export const useStatusBarColor = (options: Options = { screen: 'default' }) => {
  const { setStatusBar } = useStatusBar();
  const { isDark } = useTheme();

  const applyStatusBar = useCallback(() => {
    const { background, iconStyle: derivedIcon } = getStatusBarColor(
      isDark,
      options.screen ?? 'default'
    );

    const backgroundColor = options.customColor ?? background;
    const iconStyle = options.iconStyle ?? derivedIcon;

    setStatusBar(backgroundColor, iconStyle);
  }, [isDark, options.customColor, options.iconStyle, options.screen, setStatusBar]);

  useFocusEffect(
    useCallback(() => {
      applyStatusBar();
    }, [applyStatusBar])
  );

  useEffect(() => {
    applyStatusBar();
  }, [applyStatusBar]);
};
