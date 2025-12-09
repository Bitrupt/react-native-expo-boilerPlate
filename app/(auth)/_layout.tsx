import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='onboarding/index'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='get-started/index'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='signup/index'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='login/index'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='permissions-push-notification/index'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='permissions-location/index'
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name='survey/index'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}