import React, { useState } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import * as Location from 'expo-location';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';
import LocationIllustration from '@/assets/images/illustrations/location-illustration.png';

const LocationPermissionScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAllowLocation = async () => {
    setIsLoading(true);
    
    try {
      await Location.requestForegroundPermissionsAsync();
      router.navigate('/(tabs)/home');
    } catch (error) {
      console.error('Error requesting location permission:', error);
      router.navigate('/(tabs)/home');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoNotAllow = () => {
    router.navigate('/(tabs)/home');
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
                source={LocationIllustration} 
                style={styles.illustration} 
                resizeMode="contain" 
              />
              <Text style={styles.title}>Location Permission</Text>
              <Text style={styles.subtitle}>
                Enable location access so we can show you content and features relevant to where you are
              </Text>
            </View>

            <View style={styles.buttonSection}>
              <CustomButton
                label="Allow Location Permission"
                onPress={handleAllowLocation}
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

export default LocationPermissionScreen;