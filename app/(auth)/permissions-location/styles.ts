import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(2.5),
    justifyContent: 'space-between',
  },

  illustrationSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(4),
  },

  illustration: {
    width: wp(60),
    height: hp(25),
    marginBottom: wp(8),
  },

  title: {
    fontSize: wp(6),
    fontFamily: 'Montserrat_700Bold',
    color: Colors.common.white,
    textAlign: 'center',
    marginBottom: wp(4),
  },

  subtitle: {
    fontSize: wp(3.8),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
    textAlign: 'center',
    lineHeight: wp(6),
    opacity: 0.9,
  },

  buttonSection: {
    gap: wp(4),
    paddingBottom: hp(3),
  },

  allowButton: {
    height: hp(6.2),
  },

  denyButton: {
    height: hp(6.2),
  },
});

export default styles;