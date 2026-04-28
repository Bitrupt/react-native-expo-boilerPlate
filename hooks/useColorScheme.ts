// hooks/useColorScheme.ts
// Wrapper that falls back to light mode when the system value is unavailable
import { useColorScheme as useNativeColorScheme } from 'react-native';

export function useColorScheme(defaultScheme: 'light' | 'dark' = 'light') {
  return useNativeColorScheme() ?? defaultScheme;
}
