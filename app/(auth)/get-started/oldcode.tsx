import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';
import AppleIcon from '@/assets/logos/social/apple.png';
import GoogleIcon from '@/assets/logos/social/google.png';
import FacebookIcon from '@/assets/logos/social/facebook.png';

const GetStartedScreen = () => {
  const handleAppleSignUp = () => {
    console.log('Apple Sign Up');
  };

  const handleGoogleSignUp = () => {
    console.log('Google Sign Up');
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook Sign Up');
  };

  const handleEmailSignUp = () => {
    router.navigate('/(auth)/signup');
  };

  const handleLogin = () => {
    router.navigate('/(auth)/login');
  };

  return (
    <>
      <ImageBackground 
        source={OnboardingBg} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <ScreenHeader title="Get Started" />
          
          <View style={styles.content}>
            <View style={styles.socialButtonsSection}>
              <CustomButton
                label="Sign up with Apple"
                onPress={handleAppleSignUp}
                backgroundColor={Colors.grayscale[700]}
                textColor={Colors.common.white}
                buttonStyle={styles.socialButton}
                icon={<Image source={AppleIcon} style={styles.socialIcon} />}
              />
              
              <CustomButton
                label="Sign up with Google"
                onPress={handleGoogleSignUp}
                backgroundColor={Colors.grayscale[700]}
                textColor={Colors.common.white}
                buttonStyle={styles.socialButton}
                icon={<Image source={GoogleIcon} style={styles.socialIcon} />}
              />
              
              <CustomButton
                label="Sign up with Facebook"
                onPress={handleFacebookSignUp}
                backgroundColor={Colors.grayscale[700]}
                textColor={Colors.common.white}
                buttonStyle={styles.socialButton}
                icon={<Image source={FacebookIcon} style={styles.socialIcon} />}
              />

            <View style={styles.dividerSection}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.emailSection}>
              <CustomButton
                label="Sign up with Email"
                onPress={handleEmailSignUp}
                backgroundColor={Colors.primary}
                textColor={Colors.common.white}
                buttonStyle={styles.emailButton}
                />
              
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
              </View>
                </View>
            </View>

            <View style={styles.termsSection}>
              <Text style={styles.termsText}>
                By registering, you agree to our{' '}
                <TouchableOpacity onPress={() => console.log('Terms pressed')}>
                  <Text style={styles.termsLink}>Terms of Use.</Text>
                </TouchableOpacity>
                {'\n'}{'    '}Learn how we collect, use and share your data.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default GetStartedScreen;