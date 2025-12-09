// import { StyleSheet } from 'react-native';
// import { Colors } from '@/constants/Colors';
// import { wp, hp } from '@/hooks/screenPercentage';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.backgrounds.black,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   wrapper: {
//     backgroundColor: Colors.grayscale[400] + '10',
//     borderBottomLeftRadius: wp(5),
//     borderBottomRightRadius: wp(5),
//   },
//   scrollContent: {
//     paddingBottom: wp(6),
//   },
//   portfolioSection: {
//     flex: 1,
//     minHeight: hp(12.5),
//   },
// });

// export default styles;


// app/(tabs)/home/styles.ts - iOS FIXED VERSION

import { StyleSheet, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.black,
  },
  scrollView: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: Colors.grayscale[400] + '10',
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
  scrollContent: {
    paddingBottom: Platform.OS === 'ios' ? hp(12) : wp(6),
  },
  portfolioSection: {
    flex: 1,
    minHeight: hp(12.5),
  },
});

export default styles;