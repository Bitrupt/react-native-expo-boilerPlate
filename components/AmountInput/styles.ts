import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 32,
      },
      label: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        color: Colors.common.white,
        marginBottom: 10,
        textAlign: 'center',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayscale[400],
        paddingBottom: 8,
        paddingHorizontal: 16,
      },
      currencySymbol: {
        fontSize: 40,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.common.white,
        marginRight: 2,
      },
      input: {
        fontSize: 40,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.common.white,
        minWidth: 10,
        textAlign: 'center',
      },
});

export default styles;