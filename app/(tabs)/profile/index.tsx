import React from 'react';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import ThemeToggle from '@/components/ThemeToggle';
import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';
import { useStatusBarColor } from '@/hooks/useStatusBarColor';
import styles from './styles';

const ProfileScreen = () => {
  const router = useRouter();
  const { isDark, themeMode, setThemeMode, toggleTheme } = useTheme();
  const colors = getThemeColors(isDark);
  const { user, logout } = useAuth();

  useStatusBarColor({ screen: 'surface' });

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>Profile</Text>
          <Text style={[styles.title, { color: colors.text }]}>
            {user?.name || 'Guest'}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {user?.email || 'No account linked'}
          </Text>
        </View>
        <ThemeToggle />
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Theme</Text>
        <Text style={[styles.cardBody, { color: colors.textSecondary }]}>
          Quickly switch between light, dark, or system preference.
        </Text>
        <View style={styles.row}>
          <CustomButton
            label="Light"
            onPress={() => setThemeMode('light')}
            variant={themeMode === 'light' ? 'primary' : 'outline'}
            style={styles.chip}
          />
          <CustomButton
            label="Dark"
            onPress={() => setThemeMode('dark')}
            variant={themeMode === 'dark' ? 'primary' : 'outline'}
            style={styles.chip}
          />
          <CustomButton
            label="System"
            onPress={() => setThemeMode('system')}
            variant={themeMode === 'system' ? 'primary' : 'outline'}
            style={styles.chip}
          />
        </View>
        <CustomButton
          label="Toggle theme"
          onPress={toggleTheme}
          variant="secondary"
          style={styles.toggleButton}
        />
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Session</Text>
        <Text style={[styles.cardBody, { color: colors.textSecondary }]}>
          Swap in your real auth calls and use this screen as a template for profile actions.
        </Text>
        <CustomButton label="Log out" onPress={handleLogout} variant="outline" />
      </View>
    </View>
  );
};

export default ProfileScreen;
