import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  container: {
    gap: wp(3),
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(4),
    backgroundColor: Colors.grayscale[800],
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCardRow: {
    borderColor: Colors.primary,
    backgroundColor: Colors.grayscale[800],
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cardIconContainer: {
    marginRight: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(12.5),
    height: wp(8),
  },
  cardIcon: {
    width: wp(12),
    height: wp(7.5),
  },
  cardText: {
    fontSize: wp(4),
    fontFamily: 'Inter_500Medium',
    color: Colors.common.white,
    flex: 1,
  },
  checkBox: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: Colors.common.white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  selectedCheckBox: {
    width: wp(6),
    height: wp(6),
    backgroundColor: Colors.primary,
    borderWidth: wp(1),
    borderColor: Colors.backgrounds.primary,
  },
  addCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(4),
    backgroundColor: 'transparent',
    borderRadius: wp(3),
    marginHorizontal: wp(20),
  },
  addCardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCardText: {
    fontSize: wp(4),
    fontFamily: 'Inter_500Medium',
    color: Colors.primary,
    marginLeft: wp(3),
  },
});

export default styles;