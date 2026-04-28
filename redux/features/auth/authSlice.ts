// redux/features/auth/authSlice.ts
// Lightweight auth slice that can be wired to any backend later
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState, LoginRequest, UserProfile } from '@/types';

const STORAGE_KEY = '@boilerplate_user';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  initialized: false,
  error: null,
};

export const bootstrapAuth = createAsyncThunk('auth/bootstrap', async () => {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  return JSON.parse(stored) as UserProfile;
});

export const loginUser = createAsyncThunk<
  UserProfile,
  LoginRequest,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  if (!credentials.email || !credentials.password) {
    return rejectWithValue('Email and password are required.');
  }

  // Replace this mock with a real API request for production apps.
  const profile: UserProfile = {
    id: Date.now().toString(),
    name: credentials.email.split('@')[0] || 'User',
    email: credentials.email,
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  return profile;
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    setUser: (state, action: PayloadAction<UserProfile | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bootstrapAuth.pending, (state) => {
        state.initialized = false;
      })
      .addCase(bootstrapAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.initialized = true;
        state.error = null;
      })
      .addCase(bootstrapAuth.rejected, (state) => {
        state.initialized = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload ?? 'Unable to login. Please try again.';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.initialized = true;
      });
  },
});

export const { clearAuthError, setUser } = authSlice.actions;
export default authSlice.reducer;
