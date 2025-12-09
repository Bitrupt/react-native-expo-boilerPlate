
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    title: {
      fontSize: 16,
      fontFamily: 'Inter_500Medium',
      color: Colors.common.white,
      marginBottom: 16,
    },
    frequencyContainer: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 16,
    },
    frequencyOption: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: Colors.grayscale[800],
      borderRadius: 8,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Colors.grayscale[600] + '50',
    },
    selectedFrequency: {
      borderColor: Colors.primary,
      backgroundColor: Colors.backgrounds.primary,
    },
    frequencyText: {
      fontSize: 14,
      fontFamily: 'Inter_500Medium',
      color: Colors.grayscale[400],
    },
    selectedFrequencyText: {
      color: Colors.primary,
    },
    description: {
      fontSize: 14,
      fontFamily: 'Inter_400Regular',
      color: Colors.grayscale[600],
      textAlign: 'center',
      lineHeight: 20,
    },
  });

  export default styles;