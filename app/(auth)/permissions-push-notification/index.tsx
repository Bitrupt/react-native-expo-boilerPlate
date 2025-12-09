import React, { useState } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import * as Notifications from 'expo-notifications';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';
import PushNotificationIllustration from '@/assets/images/illustrations/pushnotification-illustration.png';

const PushNotificationPermissionScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAllowNotifications = async () => {
    setIsLoading(true);
    
    try {
      await Notifications.requestPermissionsAsync();
      router.navigate('/(auth)/permissions-location');
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      router.navigate('/(auth)/permissions-location');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoNotAllow = () => {
    router.navigate('/(auth)/permissions-location');
  };

  return (
    <>
      <ImageBackground 
        source={OnboardingBg} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ScreenHeader title="Permissions" />
          
          <View style={styles.content}>
            <View style={styles.illustrationSection}>
              <Image 
                source={PushNotificationIllustration} 
                style={styles.illustration} 
                resizeMode="contain" 
              />
              <Text style={styles.title}>Push Notifications</Text>
              <Text style={styles.subtitle}>
                Allow notifications so we can keep you updated with important news, updates, and surprises
              </Text>
            </View>

            <View style={styles.buttonSection}>
              <CustomButton
                label="Allow Push Notifications"
                onPress={handleAllowNotifications}
                backgroundColor={Colors.primary}
                textColor={Colors.common.white}
                loading={isLoading}
                buttonStyle={styles.allowButton}
              />
              
              <CustomButton
                label="Do Not Allow"
                onPress={handleDoNotAllow}
                backgroundColor={Colors.grayscale[800]}
                textColor={Colors.common.white}
                buttonStyle={styles.denyButton}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default PushNotificationPermissionScreen;