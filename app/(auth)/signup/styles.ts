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
    flexGrow: 1,
    paddingHorizontal: wp(6),
    paddingVertical: hp(2.5),
    justifyContent: 'space-between',
  },

  formContainer: {
    gap: wp(6),
    marginTop: hp(2.5),
  },

  inputContainer: {
    gap: wp(2),
  },

  inputLabel: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.common.white,
  },

  input: {
    height: hp(8),
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
    fontFamily: 'Inter_400Regular',
    backgroundColor: Colors.grayscale[900],
    color: Colors.common.white,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayscale[900],
    borderRadius: wp(3),
  },

  passwordInput: {
    flex: 1,
    height: hp(8),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },

  eyeIcon: {
    padding: wp(3.8),
  },

  passwordStrengthContainer: {
    marginTop: hp(1.5),
    gap: wp(2),
  },

  strengthBars: {
    flexDirection: 'row',
    gap: wp(2),
  },

  strengthBar: {
    flex: 1,
    height: hp(0.5),
    borderRadius: wp(0.5),
  },

  strengthText: {
    fontSize: wp(2.8),
    fontFamily: 'Inter_400Regular',
    textAlign: 'left',
  },

  bottomSection: {
    gap: wp(5),
    marginTop: hp(5),
    paddingBottom: hp(3),
  },

  signupButton: {
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
});

export default styles;