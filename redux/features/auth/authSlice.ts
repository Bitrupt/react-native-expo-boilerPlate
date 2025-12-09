// redux/features/auth/authSlice.ts - FIXED VERSION with separate loading states

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient, { tokenManager, STORAGE_KEYS } from '@/utils/apiClient';

// Simplified profile - only what's needed for basic functionality
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface AuthState {
  profile: UserProfile | null;
  isAuthInitializing: boolean;  // Separate state for app initialization
  isLoggingIn: boolean;         // Separate state for login process
  isLoggingOut: boolean;        // Separate state for logout process
  isAuthenticated: boolean;
  error: string | null;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

const initialState: AuthState = {
  profile: null,
  isAuthInitializing: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isAuthenticated: false,
  error: null,
};

// Async Thunks

// Login thunk - using URLSearchParams for proper form-urlencoded
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginRequest, { rejectWithValue }) => {
    try {
      console.log('🔑 Starting OAuth2 login for:', credentials.username);

      // Use URLSearchParams for proper application/x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('username', credentials.username);
      params.append('password', credentials.password);
      params.append('grant_type', 'password');
      params.append('scope', '');

      console.log('📤 Sending URLSearchParams as application/x-www-form-urlencoded');
      console.log('📤 Params:', params.toString());

      // Make login request with URLSearchParams
      const response = await apiClient.post<LoginResponse>('/login', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token } = response.data;

      // Save token
      await tokenManager.setToken(access_token);

      // Create minimal user profile (no complex profile API needed)
      const userProfile: UserProfile = {
        id: `user_${Date.now()}`,
        name: credentials.username,
        email: `${credentials.username}@temp.com`,
        createdAt: new Date().toISOString(),
      };

      // Save minimal profile to storage
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(userProfile));

      console.log('✅ Login successful');

      return userProfile;
    } catch (error: any) {
      console.error('❌ Login failed:', error);

      let errorMessage = 'Login failed. Please try again.';

      if (error.response?.status === 401) {
        errorMessage = 'Invalid username or password.';
      } else if (error.response?.status === 422) {
        errorMessage = 'Invalid login credentials.';
      } else if (error.response?.status === 0 || error.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your connection.';
      } else if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      }

      return rejectWithValue(errorMessage);
    }
  }
);

// Load stored profile thunk - simplified
export const loadStoredAuth = createAsyncThunk(
  'auth/loadStoredAuth',
  async (_, { rejectWithValue }) => {
    try {
      console.log('📱 Loading stored auth data');

      const token = await tokenManager.getToken();
      const storedProfile = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);

      if (token && storedProfile) {
        const profile = JSON.parse(storedProfile);
        console.log('✅ Stored auth data loaded');
        return profile;
      } else {
        console.log('❌ No stored auth data found');
        return null;
      }
    } catch (error) {
      console.error('❌ Error loading stored auth:', error);
      return null;
    }
  }
);

// Logout thunk - clear everything
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      console.log('🚪 Starting logout process...');

      // Clear ALL stored data
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.ACCESS_TOKEN,
        STORAGE_KEYS.USER_PROFILE,
        STORAGE_KEYS.REMEMBER_ME,
        STORAGE_KEYS.REMEMBERED_USERNAME,
      ]);

      console.log('✅ All auth data cleared from storage');
      console.log('✅ Logout completed');
      
      return null;
    } catch (error) {
      console.error('❌ Logout error:', error);
      
      // Even if clearing fails, still return success to clear Redux state
      return null;
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    clearProfile: (state) => {
      state.profile = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login cases
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoggingIn = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggingIn = false;
        state.isAuthenticated = true;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.isAuthenticated = false;
        state.profile = null;
        state.error = action.payload as string;
      });

    // Load stored auth cases
    builder
      .addCase(loadStoredAuth.pending, (state) => {
        state.isAuthInitializing = true;
      })
      .addCase(loadStoredAuth.fulfilled, (state, action) => {
        state.isAuthInitializing = false;
        if (action.payload) {
          state.isAuthenticated = true;
          state.profile = action.payload;
        } else {
          state.isAuthenticated = false;
          state.profile = null;
        }
      })
      .addCase(loadStoredAuth.rejected, (state) => {
        state.isAuthInitializing = false;
        state.isAuthenticated = false;
        state.profile = null;
      });

    // Logout cases - reset everything to initial state
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoggingOut = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // Reset entire state to initial state
        state.isLoggingOut = false;
        state.isAuthenticated = false;
        state.profile = null;
        state.error = null;
        console.log('🔄 Redux state reset to initial state');
      })
      .addCase(logoutUser.rejected, (state) => {
        // Even if logout failed, clear auth state
        state.isLoggingOut = false;
        state.isAuthenticated = false;
        state.profile = null;
        state.error = null;
        console.log('🔄 Redux state reset after logout error');
      });
  },
});

export const {
  setProfile,
  clearProfile,
  setError,
  clearError,
} = authSlice.actions;

export default authSlice.reducer;