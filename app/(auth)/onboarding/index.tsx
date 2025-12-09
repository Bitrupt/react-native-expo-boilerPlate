import CustomButton from '@/components/CustomButton/CustomButton';
import Logo from '@/components/Logo/Logo';
import { theme } from '@/theme/theme';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import InvestWizzLogo from '@/assets/logos/brand/investwizz-logo.png';
import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';
import OnboardingIllustration from '@/assets/images/illustrations/onboarding-illustration.png';
import { Colors } from '@/constants/Colors';

const OnboardingScreen = () => {
  const handleGetStarted = () => {
    router.navigate('/(auth)/get-started');
  };

  const handleIHaveAccount= ()=>{
    router.navigate('/(auth)/login')
  }

  return (

    <ImageBackground
      source={OnboardingBg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >

<View style={styles.container}>
        
        <View style={styles.logoSection}>
      <Image source={InvestWizzLogo} style={styles.logo} resizeMode="contain" />
    </View>

    <View style={styles.textSection}>
    <Text style={styles.mainText}>
        "Let our AI model help you make your financial dreams come true"
      </Text>
    </View>

    <View style={styles.illustrationSection}>
      <Image 
        source={OnboardingIllustration}
        style={styles.illustration}
        resizeMode="contain"
       />
    </View>

    <View style={styles.buttonSection}>

        <CustomButton
            label="Get Started"
            onPress={handleGetStarted}
            backgroundColor={Colors.primary}
            textColor={Colors.common.white}
            buttonStyle={styles.primaryButton}
          />
          
          <CustomButton
            label="I have an account"
            onPress={handleIHaveAccount}
            backgroundColor={Colors.primary}
            textColor={Colors.common.white}
            buttonStyle={styles.secondaryButton}
          />
    </View>


   
    
    </View>
  
    </ImageBackground>
    
  );
};

export default OnboardingScreen;