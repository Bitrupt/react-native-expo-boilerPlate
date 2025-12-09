// app/(tabs)/_layout.tsx - iOS FIXED VERSION

import CustomTabBar from '@/components/CustomTabBar/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';
import { View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => (
          <View style={{
            paddingBottom: Platform.OS === 'ios' ? Math.max(insets.bottom, 10) : 0
          }}>
            <CustomTabBar {...props} />
          </View>
        )}
      >
        <Tabs.Screen 
          name='home/index'
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen 
          name='portfolio/index'
          options={{
            title: 'Portfolio',
          }}
        />
        <Tabs.Screen 
          name='rewards/index'
          options={{
            title: 'Rewards',
          }}
        />
        <Tabs.Screen 
          name='goals/index'
          options={{
            title: 'Goals',
          }}
        />
        <Tabs.Screen 
          name='profile/index'
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
}