// components/CustomButton/styles.ts
import { StyleSheet } from 'react-native';
import { Fonts } from '@/constants/FontSizes';
import { spacing } from '@/hooks/screenPercentage';

export default StyleSheet.create({
  button: {
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  text: {
    fontFamily: Fonts.family.semiBold,
    fontSize: Fonts.sizes.md,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: spacing.xs,
  },
});
