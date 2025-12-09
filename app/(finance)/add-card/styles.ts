import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.black,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: wp(5),
  },
  inputContainer: {
    marginBottom: wp(6),
    backgroundColor: Colors.grayscale[400] + "20",
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
  },
  inputLabel: {
    fontSize: wp(2.5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.grayscale[400] + "90",
    paddingHorizontal: wp(1),
    paddingTop: hp(0.6),
  },
  input: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.common.white,
  },
  cardNumberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  cardNumberInput: {
    flex: 1,
    paddingRight: wp(12),
  },
  cardTypeIcon: {
    position: 'absolute',
    right: wp(2),
    width: wp(8),
    height: wp(5),
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
  rowContainer: {
    flexDirection: 'row',
    gap: wp(4),
  },
  halfWidth: {
    flex: 1,
  },
});

export default styles;