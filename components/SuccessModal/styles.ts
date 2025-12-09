import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      backgroundColor: Colors.grayscale[900],
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingBottom: 40,
    },
    content: {
      padding: 32,
      alignItems: 'center',
    },
    iconContainer: {
      marginBottom: 24,
    },
    title: {
      fontSize: 18,
      fontFamily: 'Inter_600SemiBold',
      color: Colors.common.white,
      textAlign: 'center',
      marginBottom: 32,
      lineHeight: 24,
    },
    button: {
      width: '100%',
    },
  });

  export default styles;