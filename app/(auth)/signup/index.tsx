import React, { useState } from 'react';
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
import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { useStatusBarColor } from '@/hooks/useStatusBarColor';
import styles from './styles';

const SignupScreen = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useStatusBarColor({ screen: 'surface' });

  const handleSignup = async () => {
    if (!email || !password || !name) return;
    setLoading(true);
    // Replace with real signup call
    setTimeout(() => {
      setLoading(false);
      router.replace('/(auth)/login');
    }, 600);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>Get started</Text>
          <Text style={[styles.title, { color: colors.text }]}>Create account</Text>
        </View>
        <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
          <Text style={[styles.link, { color: colors.primary }]}>Back to login</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Name</Text>
        <TextInput
          placeholder="Jane Doe"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          value={name}
          onChangeText={setName}
        />

        <Text style={[styles.label, { color: colors.textSecondary }]}>Email</Text>
        <TextInput
          placeholder="you@example.com"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={[styles.label, { color: colors.textSecondary }]}>Password</Text>
        <TextInput
          placeholder="••••••••"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.text }]}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton
          label="Create account"
          onPress={handleSignup}
          loading={loading}
          disabled={!email || !password || !name}
          style={styles.cta}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
