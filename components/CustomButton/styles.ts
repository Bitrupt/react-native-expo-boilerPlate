import { StyleSheet } from 'react-native';
import { theme } from '@/theme/theme';

const styles = StyleSheet.create({
  button: {
    height: theme.button.height,
    borderRadius: theme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    ...theme.shadow.sm,
  },
  text: {
    fontSize: theme.fontSize.md,
    fontFamily: 'Montserrat_600SemiBold',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default styles;