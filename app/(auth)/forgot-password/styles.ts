import { StyleSheet } from 'react-native';
import { Fonts } from '@/constants/FontSizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 12,
  },
  headerText: {
    flex: 1,
    minWidth: '65%',
  },
  eyebrow: {
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.sizes.sm,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.sizes.xl,
    marginTop: 6,
  },
  card: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    gap: 12,
  },
  label: {
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.sizes.sm,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.sizes.md,
  },
  cta: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  link: {
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.sizes.sm,
  },
  success: {
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.sizes.sm,
  },
});
