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
  watchlistButton: {
    padding: wp(1),
  },
  searchContainer: {
    paddingHorizontal: wp(6),
    marginBottom: wp(6),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: wp(4),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.text,
  },
  categoriesContainer: {
    marginBottom: wp(6),
  },
  categoriesRow: {
    flexDirection: 'row',
    paddingHorizontal: wp(6),
    gap: wp(2),
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(1),
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activeCategoryButton: {
    backgroundColor: Colors.primary,
  },
  categoryButtonText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.light.textSecondary,
  },
  activeCategoryButtonText: {
    color: Colors.common.white,
  },
  section: {
    marginBottom: wp(8),
    paddingHorizontal: wp(6),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: wp(4),
  },
  sectionTitle: {
    fontSize: wp(5),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
  },
  seeAllText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.primary,
  },
  ideasRow: {
    flexDirection: 'row',
    gap: wp(4),
    paddingRight: wp(6),
  },
  ideaCard: {
    width: wp(70),
    padding: wp(6),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  ideaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: wp(2),
  },
  ideaTitle: {
    flex: 1,
    fontSize: wp(4),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
    marginRight: wp(2),
  },
  riskBadge: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(1),
  },
  riskText: {
    fontSize: wp(2.5),
    fontFamily: 'Inter_600SemiBold',
  },
  ideaDescription: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    lineHeight: wp(5),
    marginBottom: wp(4),
  },
  ideaStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ideaStocks: {
    flex: 1,
  },
  ideaStocksLabel: {
    fontSize: wp(3),
    fontFamily: 'Inter_500Medium',
    color: Colors.light.textSecondary,
    marginBottom: wp(1),
  },
  ideaStocksList: {
    fontSize: wp(3),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.light.text,
  },
  ideaPerformance: {
    fontSize: wp(4),
    fontFamily: 'Inter_700Bold',
  },
  stocksList: {
    gap: wp(4),
  },
  stockCard: {
    padding: wp(6),
    backgroundColor: Colors.common.white,
    borderRadius: wp(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  stockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: wp(4),
  },
  stockInfo: {
    flex: 1,
  },
  stockSymbol: {
    fontSize: wp(4.5),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
  },
  stockName: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
    marginTop: wp(0.5),
  },
  stockSector: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textMuted,
    marginTop: wp(1),
  },
  stockPricing: {
    alignItems: 'flex-end',
  },
  stockPrice: {
    fontSize: wp(4.5),
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.light.text,
  },
  stockChange: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    marginTop: wp(0.5),
  },
  stockFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: wp(4),
    borderTopWidth: 1,
    borderTopColor: Colors.light.borderLight,
  },
  marketCap: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.light.textSecondary,
  },
  investButton: {
    paddingHorizontal: wp(4),
    paddingVertical: wp(2),
    backgroundColor: Colors.primary,
    borderRadius: wp(2),
  },
  investButtonText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.common.white,
  },
});

export default styles;