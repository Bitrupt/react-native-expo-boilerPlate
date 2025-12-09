// components/ThemeToggle/styles.ts
import { StyleSheet } from 'react-native';
import { spacing } from '@/hooks/screenPercentage';

export default StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    marginLeft: spacing.sm,
  },
});
