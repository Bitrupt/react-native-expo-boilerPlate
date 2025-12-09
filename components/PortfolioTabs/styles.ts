import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,

  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.grayscale[900],
    borderRadius: 25,
    paddingVertical: 2,
    marginVertical: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: Colors.grayscale[400],
  },
  activeTabText: {
    color: Colors.common.white,
  },
  content: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.grayscale[900],
    borderRadius: 12,
    marginBottom: 12,
    borderColor:Colors.common.white,
    borderWidth: 0.1
  },
  stockInfo: {
    flex: 1,
  },
  socialIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginRight:5
  },
  stockSymbol: {
    fontSize: 14,
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.common.white,
  },
  stockName: {
    fontSize: 10,
    fontFamily: 'Inter_400Regular',
    color: Colors.grayscale[400],
    marginTop: 2,
  },
  stockPricing: {
    alignItems: 'flex-end',
  },
  stockAmount: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: Colors.common.white,
  },
  stockChange: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    marginTop: 2,
  },
  tradePrice: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: Colors.grayscale[400],
    marginTop: 2,
  },
});

export default styles;