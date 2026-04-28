// hooks/useAuth.ts
// Minimal auth hook that exposes store-backed helpers
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import {
  bootstrapAuth,
  clearAuthError,
  loginUser,
  logoutUser,
} from '@/redux/features/auth/authSlice';
import { LoginRequest } from '@/types';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, status, initialized, error } = useAppSelector(
    (state) => state.auth
  );

  const initializeAuth = useCallback(() => {
    dispatch(bootstrapAuth());
  }, [dispatch]);

  const login = useCallback(
    (credentials: LoginRequest) => dispatch(loginUser(credentials)).unwrap(),
    [dispatch]
  );

  const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const resetError = useCallback(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  return {
    user,
    error,
    initialized,
    isAuthenticated: Boolean(user),
    isLoading: status === 'loading',
    initializeAuth,
    login,
    logout,
    resetError,
  };
};
