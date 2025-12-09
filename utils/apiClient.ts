// utils/apiClient.ts

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// API Configuration
export const API_BASE_URL = 'https://api.investwizz.ai';

// Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  USER_PROFILE: 'user_profile',
  REMEMBER_ME: 'remember_me',
  REMEMBERED_USERNAME: 'remembered_username',
};

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
  },
});

// Request interceptor - automatically adds token to requests
apiClient.interceptors.request.use(
  async (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    console.log(`📤 Request config:`, {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      headers: config.headers,
      timeout: config.timeout
    });
    
    // Get token from storage
    const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    
    // Add authorization header if token exists
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('🔑 Token added to request');
    }
    
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - handles responses and errors
apiClient.interceptors.response.use(
  (response) => {
    console.log(`📡 API Response: ${response.status} ${response.statusText}`);
    console.log(`📥 Response data:`, response.data);
    return response;
  },
  async (error) => {
    // Detailed error logging
    console.error('❌ API Error Details:');
    console.error('- Error type:', error.constructor.name);
    console.error('- Error message:', error.message);
    console.error('- Error code:', error.code);
    
    if (error.response) {
      // Server responded with error status
      console.error('- Response status:', error.response.status);
      console.error('- Response data:', error.response.data);
      console.error('- Response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.error('- Request made but no response received');
      console.error('- Request details:', error.request);
    } else {
      // Something else happened
      console.error('- Error setting up request:', error.message);
    }
    
    // Handle 401 errors (token expired)
    if (error.response?.status === 401) {
      console.log('🔒 Token expired, clearing auth data');
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ACCESS_TOKEN,
        STORAGE_KEYS.USER_PROFILE,
      ]);
    }
    
    return Promise.reject(error);
  }
);

// Token management functions
export const tokenManager = {
  async getToken(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  },

  async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  },

  async removeToken(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await this.getToken();
    return !!token;
  }
};

export default apiClient;