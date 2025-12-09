import { ConfigContext, ExpoConfig } from 'expo/config';

const APP_NAME = 'Expo Boilerplate';
const SLUG = 'expo-boilerplate';
const BUNDLE_ID = 'com.example.expoboilerplate';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: APP_NAME,
  slug: SLUG,
  scheme: SLUG,
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png', // Expo logo
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#6366F1',
  },
  ios: {
    ...config.ios,
    supportsTablet: true,
    bundleIdentifier: BUNDLE_ID,
  },
  android: {
    ...config.android,
    package: BUNDLE_ID,
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#6366F1',
    },
    permissions: [],
  },
  web: {
    ...config.web,
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: ['expo-router'],
  experiments: {
    ...config.experiments,
    typedRoutes: true,
  },
  extra: {
    ...config.extra,
    router: {},
  },
});
