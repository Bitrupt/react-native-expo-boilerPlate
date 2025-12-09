import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp,hp } from '@/hooks/screenPercentage';


// Simplest styles with subtle curve effect
const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    marginBottom: wp(6),
    backgroundColor: Colors.alert + '20',
    borderRadius: wp(6), // Increased border radius for more curved look
    overflow: 'hidden',
    // Add subtle inward shadow effect
    shadowColor: Colors.alert,
    shadowOffset: {
      width: 0,
      height: -wp(1),
    },
    shadowOpacity: 0.1,
    shadowRadius: wp(2),
    elevation: 2,
    // Create slight inward curve illusion with border
    borderWidth: wp(0.2),
    borderColor: Colors.alert + '30',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2.5),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sunIcon: {
    marginRight: wp(3),
  },
  title: {
    fontSize: wp(4),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.alert,
    flex: 1,
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default styles;