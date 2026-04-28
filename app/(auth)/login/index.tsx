import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomButton from '@/components/CustomButton';
import ThemeToggle from '@/components/ThemeToggle';
import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';
import { useStatusBarColor } from '@/hooks/useStatusBarColor';
import styles from './styles';

const LoginScreen = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const { login, isAuthenticated, isLoading, error, resetError } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useStatusBarColor({ screen: 'surface' });

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)/home');
    }
  }, [isAuthenticated, router]);

  const handleLogin = async () => {
    if (!email || !password) return;
    try {
      await login({ email, password });
      router.replace('/(tabs)/home');
    } catch {
      // handled by slice
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>
            Expo boilerplate
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>Welcome back</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Sign in with any email and password to enter the demo.
          </Text>
        </View>
        <ThemeToggle />
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Email</Text>
        <TextInput
          placeholder="you@example.com"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            if (error) resetError();
            setEmail(text);
          }}
        />

        <Text style={[styles.label, { color: colors.textSecondary }]}>Password</Text>
        <TextInput
          placeholder="••••••••"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            if (error) resetError();
            setPassword(text);
          }}
        />

        {error ? <Text style={[styles.error, { color: colors.error }]}>{error}</Text> : null}

        <CustomButton
          label="Continue"
          onPress={handleLogin}
          loading={isLoading}
          disabled={!email || !password}
          style={styles.cta}
        />
        <View style={styles.linkRow}>
          <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
            <Text style={[styles.link, { color: colors.primary }]}>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
            <Text style={[styles.link, { color: colors.primary }]}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.helper}>
        <Text style={{ color: colors.textSecondary }}>
          Need a backend? Swap the mock login in
        </Text>
        <Text style={{ color: colors.text }}>redux/features/auth/authSlice.ts</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
