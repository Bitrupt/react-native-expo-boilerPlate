import { StyleSheet } from 'react-native';
import { theme } from '@/theme/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadow.md,
  },
  logoText: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: theme.colors.primary,
  },
  small: {
    width: 40,
    height: 40,
  },
  medium: {
    width: 60,
    height: 60,
  },
  large: {
    width: 80,
    height: 80,
  },
  smallText: {
    fontSize: 16,
  },
  mediumText: {
    fontSize: 22,
  },
  largeText: {
    fontSize: 28,
  },
});

export default styles;