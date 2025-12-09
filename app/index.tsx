// app/index.tsx - PROPER AUTH ROUTING

import { useAuth } from '@/hooks/useAuth';
import { Redirect } from 'expo-router';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';

const AppIndex = () => {
  const { 
    isAuthInitializing,  // Use specific loading state for initialization
    isAuthenticated, 
  } = useAuth();
  
  // Show loading spinner only during auth initialization
  if (isAuthInitializing) {
    return (
      <View 
        style={{ 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: Colors.grayscale[900]
        }}
      >
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  
  // Redirect based on authentication status
  if (isAuthenticated) {
    console.log('✅ User authenticated, navigating to main app');
    return <Redirect href="/(tabs)/home" />;
  } else {
    console.log('❌ User not authenticated, navigating to onboarding');
    return <Redirect href="/(auth)/onboarding" />;
  }
};

export default AppIndex;