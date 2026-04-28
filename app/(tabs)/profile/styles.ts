import { StyleSheet } from 'react-native';
import { Fonts } from '@/constants/FontSizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
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
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.sizes.xl,
    marginTop: 6,
  },
  subtitle: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.sizes.md,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },
  cardTitle: {
    fontFamily: Fonts.family.semiBold,
    fontSize: Fonts.sizes.lg,
  },
  cardBody: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.sizes.md,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  chip: {
    minHeight: 44,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  toggleButton: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
});
