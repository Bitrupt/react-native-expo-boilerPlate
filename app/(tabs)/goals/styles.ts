import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.black,
  },
  containerWithGoals: {
    flex: 1,
    backgroundColor: Colors.backgrounds.black,
  },
  scrollView: {
    flex: 1,
  },
  
  emptyStateContainer: {
    flex: 1,
    backgroundColor: Colors.grayscale[900],
    marginVertical: Platform.OS === 'ios' ? hp(12) : hp(16),
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(4),
    
  },
  emptyStateContent: {
    alignItems: 'center',
  },
  illustrationContainer: {
    marginBottom: 0,

  },
  emptyTitle: {
    fontSize: wp(5),
    fontFamily: 'Inter_600SemiBold',
    color: Colors.common.white,
    textAlign: 'center',
    marginBottom: wp(4),
  },
  emptySubtitle: {
    fontSize: wp(3.5),
    fontFamily: 'Inter_400Regular',
    color: Colors.grayscale[400],
    textAlign: 'center',
    lineHeight: wp(5),
    marginBottom: wp(4),
  },
  createFirstGoalButton: {
    alignItems: 'center',
    gap: wp(3),
  },
  plusIconContainer: {
    width: wp(14),
    height: wp(14),
    backgroundColor: Colors.primary,
    borderRadius: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  createFirstGoalText: {
    fontSize: wp(4),
    fontFamily: 'Inter_500Medium',
    color: Colors.primary,
  },
  
  goalsListContainer: {
    backgroundColor: 'transparent',
    borderRadius: wp(4),
    padding: wp(4),
    gap: wp(4),
  },
  
  addGoalButton: {
    position: 'absolute',
    bottom: hp(4),
    left: '50%',
    marginLeft: -wp(7),
    width: wp(14),
    height: wp(14),
    backgroundColor: Colors.primary,
    borderRadius: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.backgrounds.black,
    shadowOffset: {
      width: 0,
      height: hp(0.5),
    },
    shadowOpacity: 0.3,
    shadowRadius: wp(1),
    elevation: 8,
  },
  illustration: {
    width: wp(40),
    height: hp(25),
    // marginBottom: wp(8),
  },
});

export default styles;