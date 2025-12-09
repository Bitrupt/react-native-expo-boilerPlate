import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { theme } from '@/theme/theme';
import { hp, wp } from '@/hooks/screenPercentage';

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
    paddingVertical: 0,
    justifyContent: 'space-between',
  },

  socialButtonsSection: {
    gap: wp(4), 
    marginTop: hp(5), 
  },

  socialButton: {
    height: hp(6.2), 
  },

  socialIcon: {
    width: wp(5), 
    height: wp(5),
    resizeMode: 'contain',
  },

  dividerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(4),
    paddingHorizontal: wp(5),
  },

  dividerLine: {
    flex: 1,
    height: hp(0.1),
    backgroundColor: Colors.common.white,
    opacity: 0.3,
  },

  dividerText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.common.white,
    marginHorizontal: wp(4),
    opacity: 0.7,
  },

  emailSection: {
    gap: wp(5), 
  },

  emailButton: {
    height: hp(6.2),
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: wp(3.5), 
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },

  loginLink: {
    fontSize: wp(3.5), 
    fontFamily: 'Inter_600SemiBold',
    color: Colors.primary,
  },

  termsSection: {
    paddingHorizontal: wp(4), 
    marginBottom: hp(3), 
  },

  termsText: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
    textAlign: 'center',
    lineHeight: wp(4.5), 
    opacity: 0.8,
  },

  termsLink: {
    fontSize: wp(3), 
    fontFamily: 'Inter_600SemiBold',
    color: Colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles;