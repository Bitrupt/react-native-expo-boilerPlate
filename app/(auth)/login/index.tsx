// app/(auth)/login/index.tsx - FIXED VERSION with proper loading states

import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ImageBackground, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Checkbox } from 'expo-checkbox';
import { Toast } from 'toastify-react-native';
import CustomButton from '@/components/CustomButton/CustomButton';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/hooks/useAuth';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';

interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

const LoginScreen = () => {
  const { 
    login, 
    isLoggingIn,        // Use specific loading state for login
    isAuthenticated,    // Watch auth state for successful login
    error, 
    clearAuthError, 
    saveRememberMe, 
    getRememberedCredentials 
  } = useAuth();
  
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load remembered credentials on mount
  useEffect(() => {
    loadRememberedCredentials();
  }, []);

  // Handle error display
  useEffect(() => {
    if (error) {
      Toast.error(error);
      clearAuthError();
    }
  }, [error, clearAuthError]);

  // Handle successful login navigation
  useEffect(() => {
    if (isAuthenticated) {
      console.log('🎉 Login successful, navigating to home');
      Toast.success('Login successful!');
      router.replace('/(tabs)/home');
    }
  }, [isAuthenticated]);

  const loadRememberedCredentials = async () => {
    const remembered = await getRememberedCredentials();
    if (remembered) {
      setFormData(prev => ({ ...prev, username: remembered.username }));
      setRememberMe(remembered.remember);
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    } else if (formData.username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 3) {
      errors.password = 'Password must be at least 3 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    clearAuthError();
    setFormErrors({});

    if (!validateForm()) {
      return;
    }

    try {
      // Save remember me preference first
      await saveRememberMe(formData.username, rememberMe);

      // Attempt login
      const success = await login({
        username: formData.username.trim(),
        password: formData.password,
      });

      if (!success) {
        console.log('❌ Login failed - staying on login page');
        // Login failed - user will stay on this page
        // Error toast will be shown via the error useEffect above
      }
      // If login is successful, navigation will be handled by the useEffect above
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignUp = () => {
    router.navigate('/(auth)/get-started');
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Password reset functionality is not implemented yet.',
      [
        { text: 'OK', style: 'default' }
      ]
    );
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormValid = (): boolean => {
    return formData.username.trim().length > 0 && 
           formData.password.length > 0 && 
           Object.keys(formErrors).length === 0;
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
          <ScreenHeader title="Login" />
          
          <ScrollView 
            contentContainerStyle={styles.content} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                  style={[
                    styles.input,
                    formErrors.username && styles.inputError
                  ]}
                  placeholder="Enter your username"
                  placeholderTextColor={Colors.grayscale[600]}
                  value={formData.username}
                  onChangeText={(text) => handleInputChange('username', text)}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoggingIn}  // Use specific loading state
                />
                {formErrors.username && (
                  <Text style={styles.errorText}>{formErrors.username}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={[
                  styles.passwordContainer,
                  formErrors.password && styles.inputError
                ]}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    placeholderTextColor={Colors.grayscale[600]}
                    value={formData.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    secureTextEntry={!showPassword}
                    editable={!isLoggingIn}  // Use specific loading state
                  />
                  <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                    disabled={isLoggingIn}  // Use specific loading state
                  >
                    <Ionicons 
                      name={showPassword ? "eye-off" : "eye"} 
                      size={20} 
                      color={Colors.grayscale[600]} 
                    />
                  </TouchableOpacity>
                </View>
                {formErrors.password && (
                  <Text style={styles.errorText}>{formErrors.password}</Text>
                )}
              </View>

              {/* Remember Me and Forgot Password Row */}
              <View style={styles.optionsRow}>
                <TouchableOpacity 
                  style={styles.rememberMeContainer}
                  onPress={() => setRememberMe(!rememberMe)}
                  disabled={isLoggingIn}  // Use specific loading state
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={rememberMe}
                    onValueChange={setRememberMe}
                    color={rememberMe ? Colors.primary : Colors.common.white}
                    disabled={isLoggingIn}  // Use specific loading state
                  />
                  <Text style={styles.rememberMeText}>Remember me</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.forgotPasswordContainer}
                  onPress={handleForgotPassword}
                  disabled={isLoggingIn}  // Use specific loading state
                >
                  <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bottomSection}>
              <CustomButton
                label="Login"
                onPress={handleLogin}
                backgroundColor={Colors.primary}
                textColor={Colors.common.white}
                disabled={!isFormValid() || isLoggingIn}  // Use specific loading state
                loading={isLoggingIn}  // Use specific loading state
                buttonStyle={styles.loginButton}
              />
              
              <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignUp} disabled={isLoggingIn}>
                  <Text style={styles.signupLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
};

export default LoginScreen;