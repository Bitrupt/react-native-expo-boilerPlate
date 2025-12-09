import { StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';
import { hp, wp } from '@/hooks/screenPercentage';



const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(5),
      marginTop: hp(2.5),
      borderRadius: wp(4),
      padding: wp(6),
      alignItems: 'center',
    },
    progressContainer: {
      marginBottom: hp(3),
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    progressText: {
      position: 'absolute',
      fontSize: wp(6),
      fontFamily: 'Inter_700Bold',
      color: Colors.common.white,
    },
    statsContainer: {
      flexDirection: 'row',
      gap: wp(10),
    },
    statItem: {
      alignItems: 'center',
    },
    statLabel: {
      fontSize: wp(3.5),
      fontFamily: 'Inter_400Regular',
      color: Colors.common.white,
      opacity: 0.8,
      marginBottom: hp(0.5),
    },
    statValue: {
      fontSize: wp(5),
      fontFamily: 'Inter_700Bold',
      color: Colors.common.white,
    },
  });

  export default styles;