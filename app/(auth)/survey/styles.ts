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
    paddingTop: hp(20),
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(2.5),
    width: '90%',
    alignSelf: 'center',
  },

  questionSection: {
    width: '100%',
    marginTop: hp(5),
  },

  optionsSection: {
    width: '100%',
    gap: wp(4),
    paddingHorizontal: wp(7),
    paddingVertical: wp(6),
    backgroundColor: Colors.grayscale[800],
    borderRadius: wp(3),
  },

  question: {
    fontSize: wp(5),
    fontFamily: 'Montserrat_700Bold',
    color: Colors.common.white,
    textAlign: 'left',
    lineHeight: wp(8),
    marginBottom: wp(5),
  },

  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: Colors.common.white + '30',
  },

  selectedOptionItem: {
    backgroundColor: Colors.primary + '20',
    borderColor: Colors.primary,
  },

  optionText: {
    fontSize: wp(4),
    fontFamily: 'Inter_500Medium',
    color: Colors.common.white,
    flex: 1,
  },

  selectedOptionText: {
    color: Colors.primary,
    fontFamily: 'Inter_600SemiBold',
  },

  radioButton: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 2,
    borderColor: Colors.common.white,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  selectedRadioButton: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },

  buttonSection: {
    width: '100%',
    paddingBottom: hp(3),
  },

  submitButton: {
    height: hp(6.2),
  },
});

export default styles;