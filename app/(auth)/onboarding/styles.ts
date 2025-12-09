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
    paddingTop: hp(8),
    paddingBottom: hp(5),
    paddingHorizontal: wp(6),
  },

  logoSection: {
    alignItems: 'center',
    marginTop: hp(6),
    marginBottom: hp(3),
  },
  
  logo: {
    width: wp(40),
    height: hp(8),
  },

  textSection: {
    alignItems: 'center',
    paddingHorizontal: wp(4),
    marginBottom: hp(4),
  },
  
  mainText: {
    fontSize: wp(4),
    fontFamily: 'Inter_500Medium',
    color: Colors.common.white,
    textAlign: 'center',
    lineHeight: wp(6.5),
    letterSpacing: 0.5,
  },

  illustrationSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
  
  illustration: {
    width: wp(80),
    height: hp(35),
  },

  buttonSection: {
    gap: wp(4),
    paddingHorizontal: 0,
    marginBottom: hp(2),
  },
  
  primaryButton: {
    height: hp(6.2),
    borderRadius: wp(6.2),
  },
  
  secondaryButton: {
    height: hp(6.2),
    borderRadius: wp(6.2),
  },
});

export default styles;