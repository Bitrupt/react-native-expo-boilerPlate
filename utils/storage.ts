import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_PROFILE: '@investwizz:user_profile',
  ONBOARDING_COMPLETED: '@investwizz:onboarding_completed',
  PERMISSIONS: '@investwizz:permissions',
  SETTINGS: '@investwizz:settings',
} as const;

export const storage = {
  async setItem(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error storing data:', error);
      throw error;
    }
  },

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  },

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  },

  async setUserProfile(profile: any): Promise<void> {
    return this.setItem(STORAGE_KEYS.USER_PROFILE, profile);
  },

  async getUserProfile<T>(): Promise<T | null> {
    return this.getItem<T>(STORAGE_KEYS.USER_PROFILE);
  },

  async removeUserProfile(): Promise<void> {
    return this.removeItem(STORAGE_KEYS.USER_PROFILE);
  },

  async setOnboardingCompleted(completed: boolean): Promise<void> {
    return this.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, completed);
  },

  async getOnboardingCompleted(): Promise<boolean> {
    const completed = await this.getItem<boolean>(STORAGE_KEYS.ONBOARDING_COMPLETED);
    return completed ?? false;
  },

  async setPermissions(permissions: any): Promise<void> {
    return this.setItem(STORAGE_KEYS.PERMISSIONS, permissions);
  },

  async getPermissions<T>(): Promise<T | null> {
    return this.getItem<T>(STORAGE_KEYS.PERMISSIONS);
  },

  async setSettings(settings: any): Promise<void> {
    return this.setItem(STORAGE_KEYS.SETTINGS, settings);
  },

  async getSettings<T>(): Promise<T | null> {
    return this.getItem<T>(STORAGE_KEYS.SETTINGS);
  },
};