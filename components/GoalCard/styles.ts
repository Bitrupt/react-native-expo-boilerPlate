import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';
import { hp, wp } from '@/hooks/screenPercentage';



  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: Colors.grayscale[900],
      borderRadius: wp(3),
      padding: wp(4),
      alignItems: 'center',
      marginHorizontal: wp(1),
    },
    leftSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    goalInfo: {
      flex: 1,
    },
    goalName: {
      fontSize: wp(4),
      fontFamily: 'Inter_600SemiBold',
      color: Colors.common.white,
      marginBottom: hp(0.5),
    },
    amountText: {
      fontSize: wp(3.5),
      fontFamily: 'Inter_500Medium',
      color: Colors.common.white,
      marginBottom: hp(0.5),
    },
    durationText: {
      fontSize: wp(3),
      fontFamily: 'Inter_400Regular',
      color: Colors.grayscale[400],
      marginBottom: hp(0.5),
    },
    monthlyText: {
      fontSize: wp(3),
      fontFamily: 'Inter_400Regular',
      color: Colors.grayscale[400],
      marginBottom: hp(1),
    },
    tagContainer: {
      alignSelf: 'flex-start',
      backgroundColor: Colors.success + '20',
      paddingHorizontal: wp(2),
      paddingVertical: hp(0.5),
      borderRadius: wp(1.5),
    },
    tagText: {
      fontSize: wp(2.5),
      fontFamily: 'Inter_500Medium',
      color: Colors.success,
    },
    rightSection: {
      marginLeft: wp(4),
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    progressText: {
      position: 'absolute',
      fontSize: wp(3),
      fontFamily: 'Inter_600SemiBold',
      color: Colors.common.white,
    },
    illustration: {
      width: wp(11),
      height: hp(6),
      marginBottom: hp(1),
    },
  });
  

  export default styles;