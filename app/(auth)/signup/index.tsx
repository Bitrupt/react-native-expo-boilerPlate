import CustomButton from '@/components/CustomButton/CustomButton';
import { theme } from '@/theme/theme';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';
import { Colors } from '@/constants/Colors';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';


const getStrengthColor = (strength: number): string => {
  switch (strength) {
    case 1: return Colors.error;           
    case 2: return Colors.warning;         
    case 3: return Colors.secondary;       
    case 4: return Colors.success;         
    default: return Colors.grayscale[600]; 
  }
};

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const getPasswordStrength =(password:string)=>{
    if(password.length===0) return {strength:0,text :'Use 8 or more characters with a mix of letters, numbers & symbols.'}
    if(password.length < 4 ) return {strength:1,text :'Too short '}
    if(password.length < 6) return {strength:2,text :'Weak password'}
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score < 3) return { strength: 2, text: 'Weak password' };
    if (score < 4) return { strength: 3, text: 'Good password' };
    return { strength: 4, text: 'Strong password' };
    
  };
  const passwordStrength = getPasswordStrength(formData.password);



  const handleSignUp = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.navigate('/(auth)/permissions-push-notification');
    }, 2000);
  };

  const handleLogin = () => {
    router.navigate('/(auth)/login');
  };

  const isFormValid = () => {
    return (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length >= 8 &&
      passwordStrength.strength >= 3 
    );
  };

  return (
    <>
      <ImageBackground 
        source={OnboardingBg} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView 
          style={styles.container} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScreenHeader title="Sign up with Email" />
          
          <ScrollView 
            contentContainerStyle={styles.content} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor={Colors.grayscale[600]}
                  value={formData.name}
                  onChangeText={(text) => setFormData({ ...formData, name: text })}
                  autoCapitalize="words"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor={Colors.grayscale[600]}
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor={Colors.grayscale[600]}
                    value={formData.password}
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Feather 
                      name={showPassword ? "eye-off" : "eye"} 
                      size={20} 
                      color={Colors.grayscale[600]} 
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.passwordStrengthContainer}>
                  <View style={styles.strengthBars}>
                    {[1, 2, 3, 4].map((bar) => (
                      <View
                        key={bar}
                        style={[
                          styles.strengthBar,
                          {
                            backgroundColor: bar <= passwordStrength.strength 
                              ? getStrengthColor(passwordStrength.strength)
                              : Colors.grayscale[700]
                          }
                        ]}
                      />
                    ))}
                  </View>
                  <Text style={[
                    styles.strengthText,
                    { color: getStrengthColor(passwordStrength.strength) }
                  ]}>
                    {passwordStrength.text}
                  </Text>
                </View>
              </View>

              {/* <View style={styles.inputContainer}>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirm password"
                    placeholderTextColor={Colors.grayscale[600]}
                    value={formData.confirmPassword}
                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <Ionicons 
                      name={showConfirmPassword ? "eye-off" : "eye"} 
                      size={20} 
                      color={Colors.grayscale[600]} 
                    />
                  </TouchableOpacity>
                </View>
              </View> */}
            </View>

            <View style={styles.bottomSection}>
              <CustomButton
                label="Sign Up"
                onPress={handleSignUp}
                backgroundColor={Colors.primary}
                textColor={Colors.common.white}
                loading={isLoading}
                buttonStyle={styles.signupButton}
              />
              
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleLogin}>
                  <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default SignUpScreen;