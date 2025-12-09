import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: height * 0.06, 
    paddingBottom: 16,
  },
  
  reducedPaddingContainer: {
    paddingTop: 16, 
  },
  
  backButton: {
    width: 40,
    height: 40,
    // borderRadius: 20,
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.common.white,
    textAlign: 'center',
    flex: 1,
  },
  
  spacer: {
    width: 40,
  },
});

export default styles;