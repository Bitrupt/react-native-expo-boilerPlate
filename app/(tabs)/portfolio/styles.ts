import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(6),
    paddingTop: wp(6),
    paddingBottom: wp(4),
  },
  headerTitle: {
    fontSize: wp(6),
    fontFamily: 'Montserrat_700Bold',
    color: Colors.light.text,
  },
  settingsButton: {
    padding: wp(1),
  },
  summaryCard: {
    marginHorizontal: wp(6),
    marginBottom: wp(6),
    padding: wp(6),
    backgroundColor: Colors.common.white,
    borderRadius: wp(4),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  summaryLabel: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.light.textSecondary,
  },
  summaryValue: {
    fontSize: wp(8),
    fontFamily: 'Montserrat_700Bold',
    color: Colors.light.text,
    marginVertical: wp(2),
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp(4),
    paddingTop: wp(4),
    borderTopWidth: 1,
    borderTopColor: Colors.light.borderLight,
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginBottom: wp(1),
  },
  statValue: {
    fontSize: wp(4),
    fontFamily: 'Inter_600SemiBold',
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(6),
    marginBottom: wp(6),
    backgroundColor: Colors.light.backgroundSecondary,
    borderRadius: wp(3),
    padding: wp(1),
  },
  tabButton: {
    flex: 1,
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: Colors.common.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  tabButtonText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.light.textSecondary,
  },
  activeTabButtonText: {
    color: Colors.light.text,
    fontFamily: 'Inter_600SemiBold',
  },
  tabContent: {
    paddingHorizontal: wp(6),
  },
  holdingsContainer: {
    gap: wp(4),
  },
  holdingCard: {
    padding: wp(6),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  holdingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: wp(4),
  },
  holdingInfo: {
    flex: 1,
  },
  holdingSymbol: {
    fontSize: wp(4.5),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
  },
  holdingName: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginTop: wp(0.5),
  },
  holdingShares: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textMuted,
    marginTop: wp(1),
  },
  holdingValue: {
    alignItems: 'flex-end',
  },
  holdingPrice: {
    fontSize: wp(4.5),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
  },
  holdingGain: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    marginTop: wp(0.5),
  },
  holdingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp(4),
    borderTopWidth: 1,
    borderTopColor: Colors.light.borderLight,
  },
  holdingDetailItem: {
    alignItems: 'center',
  },
  holdingDetailLabel: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginBottom: wp(1),
  },
  holdingDetailValue: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.light.text,
  },
  transactionsContainer: {
    gap: wp(4),
  },
  transactionCard: {
    padding: wp(6),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  transactionTypeIcon: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: wp(4),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.light.text,
  },
  transactionDate: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginTop: wp(0.5),
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionTotal: {
    fontSize: wp(4),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.light.text,
  },
  transactionDetails: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginTop: wp(0.5),
  },
});

export default styles;