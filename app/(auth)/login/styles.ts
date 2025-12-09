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
    height: hp(6.2),
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
    fontFamily: 'Inter_400Regular',
    backgroundColor: Colors.grayscale[900],
    color: Colors.common.white,
    borderWidth: 1,
    borderColor: Colors.grayscale[700],
  },

  inputError: {
    borderColor: '#FF4444',
    borderWidth: 1.5,
  },

  errorText: {
    fontSize: wp(3),
    fontFamily: 'Inter_400Regular',
    color: '#FF4444',
    marginTop: hp(0.5),
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayscale[900],
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: Colors.grayscale[700],
  },

  passwordInput: {
    flex: 1,
    height: hp(6.2),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },

  eyeIcon: {
    padding: wp(3.8),
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1),
  },

  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    paddingVertical: hp(0.5),
  },

  checkbox: {
    width: wp(4.5),
    height: wp(4.5),
    borderRadius: wp(1),
    borderWidth: 2,
    borderColor: Colors.common.white,
  },

  rememberMeText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },

  forgotPasswordContainer: {
    paddingVertical: hp(0.5),
  },

  forgotPasswordText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_500Medium',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },

  bottomSection: {
    gap: wp(5),
    marginTop: hp(5),
    paddingBottom: hp(3),
  },

  loginButton: {
    height: hp(6.2),
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupText: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },

  signupLink: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.primary,
  },
});

export default styles;