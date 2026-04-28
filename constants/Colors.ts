// constants/Colors.ts
// Minimal, theme-aware color system for the boilerplate

export type ThemeColors = {
  background: string;
  surface: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  primary: string;
  secondary: string;
  btnText: string;
  success: string;
  warning: string;
  error: string;
  statusBar: string;
  overlay: string;
};

const lightColors: ThemeColors = {
  background: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#EEF2FF',
  text: '#0F172A',
  textSecondary: '#475569',
  border: '#E2E8F0',
  primary: '#6366F1',
  secondary: '#22D3EE',
  btnText: '#FFFFFF',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  statusBar: '#F8FAFC',
  overlay: '#0F172A14',
};

const darkColors: ThemeColors = {
  background: '#0B1220',
  surface: '#0F172A',
  card: '#111827',
  text: '#E2E8F0',
  textSecondary: '#94A3B8',
  border: '#1F2937',
  primary: '#818CF8',
  secondary: '#38BDF8',
  btnText: '#0B1220',
  success: '#4ADE80',
  warning: '#FACC15',
  error: '#F87171',
  statusBar: '#0B1220',
  overlay: '#0B122022',
};

export type StatusBarScreen =
  | 'default'
  | 'surface'
  | 'primary'
  | 'transparent';

export const getThemeColors = (isDark: boolean): ThemeColors =>
  isDark ? darkColors : lightColors;

export const getStatusBarColor = (
  isDark: boolean,
  screen: StatusBarScreen = 'default'
): { background: string; iconStyle: 'light' | 'dark' } => {
  const theme = getThemeColors(isDark);

  switch (screen) {
    case 'surface':
      return { background: theme.surface, iconStyle: isDark ? 'light' : 'dark' };
    case 'primary':
      return { background: theme.primary, iconStyle: 'light' };
    case 'transparent':
      return { background: 'transparent', iconStyle: isDark ? 'light' : 'dark' };
    default:
      return { background: theme.statusBar, iconStyle: isDark ? 'light' : 'dark' };
  }
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};
