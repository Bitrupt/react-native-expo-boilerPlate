import { StyleSheet } from "react-native";
import { Colors } from '../../../constants/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.light.background,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    iconContainer: {
      width: 120,
      height: 120,
      backgroundColor: Colors.backgrounds.primary,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
    title: {
      fontSize: 28,
      fontFamily: 'Montserrat_700Bold',
      color: Colors.light.text,
      marginBottom: 16,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter_400Regular',
      color: Colors.light.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
    },
    comingSoon: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      backgroundColor: Colors.secondary,
      borderRadius: 25,
    },
    comingSoonText: {
      fontSize: 14,
      fontFamily: 'Inter_600SemiBold',
      color: Colors.common.white,
    },
  });

  export default styles;