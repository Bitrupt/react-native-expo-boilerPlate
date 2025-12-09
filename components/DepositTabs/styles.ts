import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: Colors.grayscale[900],
      borderRadius: 25,
      padding: 0,
      marginBottom: 22,
    },
    tab: {
      flex: 1,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 20,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: Colors.primary + '20',
    },
    tabText: {
      fontSize: 14,
      fontFamily: 'Inter_500Medium',
      color: Colors.grayscale[400],
    },
    activeTabText: {
      color: Colors.primary,
    },
  });

  export default styles;