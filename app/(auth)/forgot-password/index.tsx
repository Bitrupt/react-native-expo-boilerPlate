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

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useStatusBarColor({ screen: 'surface' });

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    // Replace with real password reset call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>
            Account help
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>Reset password</Text>
        </View>
        <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
          <Text style={[styles.link, { color: colors.primary }]}>Back to login</Text>
        </TouchableOpacity>
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
          onChangeText={setEmail}
        />

        {submitted ? (
          <Text style={[styles.success, { color: colors.success }]}>
            Check your email for reset instructions.
          </Text>
        ) : null}

        <CustomButton
          label="Send reset link"
          onPress={handleSubmit}
          loading={loading}
          disabled={!email}
          style={styles.cta}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
