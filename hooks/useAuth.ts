// hooks/useAuth.ts - FIXED VERSION with separate loading states

import { useAppSelector, useAppDispatch } from '@/redux/store/store';
import { loginUser, logoutUser, loadStoredAuth, clearError } from '@/redux/features/auth/authSlice';
import { STORAGE_KEYS } from '@/utils/apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginCredentials {
  username: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { 
    profile, 
    isAuthInitializing, 
    isLoggingIn, 
    isLoggingOut, 
    isAuthenticated, 
    error 
  } = useAppSelector((state) => state.auth);

  // Login function
  const login = async (credentials: LoginCredentials) => {
    const result = await dispatch(loginUser(credentials));
    return result.type === loginUser.fulfilled.type;
  };

  // Logout function
  const logout = async () => {
    await dispatch(logoutUser());
  };

  // Initialize auth (load stored data)
  const initializeAuth = async () => {
    await dispatch(loadStoredAuth());
  };

  // Clear error function
  const clearAuthError = () => {
    dispatch(clearError());
  };

  // Remember me functions
  const saveRememberMe = async (username: string, remember: boolean) => {
    try {
      if (remember) {
        await AsyncStorage.setItem(STORAGE_KEYS.REMEMBERED_USERNAME, username);
        await AsyncStorage.setItem(STORAGE_KEYS.REMEMBER_ME, 'true');
      } else {
        await AsyncStorage.removeItem(STORAGE_KEYS.REMEMBERED_USERNAME);
        await AsyncStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
      }
    } catch (error) {
      console.error('Error saving remember me:', error);
    }
  };

  const getRememberedCredentials = async () => {
    try {
      const username = await AsyncStorage.getItem(STORAGE_KEYS.REMEMBERED_USERNAME);
      const remember = await AsyncStorage.getItem(STORAGE_KEYS.REMEMBER_ME);
      
      if (username && remember === 'true') {
        return { username, remember: true };
      }
      
      return null;
    } catch (error) {
      console.error('Error getting remembered credentials:', error);
      return null;
    }
  };

  // Simple utility - just check if user completed onboarding (always true since no profile API)
  const hasCompletedOnboarding = () => {
    return isAuthenticated; // If authenticated, go to home
  };

  // Get display name (simple fallback)
  const getDisplayName = () => {
    return profile?.name || 'User';
  };

  return {
    // State - separated loading states
    profile,
    isAuthInitializing,   // Only for app initialization
    isLoggingIn,          // Only for login process
    isLoggingOut,         // Only for logout process
    isAuthenticated,
    error,
    
    // Backward compatibility (deprecated - use specific loading states)
    isLoading: isAuthInitializing || isLoggingIn || isLoggingOut,
    
    // Actions
    login,
    logout,
    initializeAuth,
    clearAuthError,
    
    // Remember me
    saveRememberMe,
    getRememberedCredentials,
    
    // Simplified utility functions
    hasCompletedOnboarding,
    getDisplayName,
  };
};