import { StyleSheet } from 'react-native';
import { Fonts } from '@/constants/FontSizes';

export default StyleSheet.create({
  content: {
    padding: 20,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    minWidth: '70%',
  },
  eyebrow: {
    fontFamily: Fonts.family.medium,
    fontSize: Fonts.sizes.sm,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.sizes.xl,
    marginTop: 4,
  },
  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    columnGap: 12,
    rowGap: 12,
  },
  cardHeaderText: {
    flex: 1,
    minWidth: '60%',
  },
  cardTitle: {
    fontFamily: Fonts.family.semiBold,
    fontSize: Fonts.sizes.lg,
  },
  cardBody: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.sizes.md,
    marginTop: 4,
  },
  list: {
    marginTop: 12,
    gap: 10,
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
  addButton: {
    paddingHorizontal: 18,
    minHeight: 44,
    alignSelf: 'flex-start',
  },
});
