import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from './styles';

interface HomeHeaderProps {
  onNotificationPress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image 
          source={require('@/assets/images/homelogo.png')} // Add your logo image
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>InvestWizz</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={onNotificationPress}
      >
        <Ionicons 
          name="notifications-outline" 
          size={24} 
          color={Colors.common.white} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;