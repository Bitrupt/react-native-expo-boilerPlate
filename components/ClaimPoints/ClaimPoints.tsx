// Cleanest approach - using borderRadius on specific corners
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { wp, hp } from '@/hooks/screenPercentage';
import StarIcon from '@/assets/svgs/star.svg';
interface ClaimPointsProps {
  points: number;
  onPress?: () => void;
}

const ClaimPoints: React.FC<ClaimPointsProps> = ({ points, onPress }) => {
  return (
    <View style={styles.containerWrapper}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.content}>
          <View style={styles.leftSection}>
           <StarIcon
              width={wp(6)}
              height={wp(6)}
              color={Colors.alert}
              fill={Colors.alert}
              style={styles.sunIcon}
            />
            <Text style={styles.title}>Claim your {points} points here!</Text>
          </View>
          
          <View style={styles.rightSection}>
            <Ionicons
              name="chevron-forward"
              size={wp(6)}
              color={Colors.alert}
            />
          </View>
        </View>
      </TouchableOpacity>
      
      {/* Clean semicircle notch */}
      <View style={styles.semicircleNotch} />

      <View style={styles.semicircleNotch2} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    marginHorizontal: wp(5),
    marginBottom: wp(6),
    position: 'relative',
  },
  container: {
    backgroundColor: Colors.alert + '20',
    borderRadius: wp(3),
    height: hp(8),
  },
  semicircleNotch2: {
    position: 'absolute',
    left: 0,
    top: '50%',
    marginTop: -wp(3),
    width: wp(3),
    height: wp(6),
    backgroundColor: Colors.common.black + '90', 
    borderTopRightRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
  semicircleNotch: {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -wp(3),
    width: wp(3),
    height: wp(6),
    backgroundColor: Colors.common.black + '90',
    borderTopLeftRadius: wp(5),
    borderBottomLeftRadius: wp(5),
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp(5),
    paddingRight: wp(6), 
    paddingVertical: hp(2),
    height: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sunIcon: {
    marginRight: wp(3),
  },
  title: {
    fontSize: wp(4),
    fontFamily: 'Montserrat_500Medium',
    color: Colors.alert,
    flex: 1,
  },
  rightSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClaimPoints;