import { Stack } from 'expo-router';
import React from 'react';

export default function FinanceLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="deposit/index" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="add-card/index" 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="withdraw/index" 
        options={{ 
          headerShown: false,
          title: 'Withdraw Funds'
        }} 
      />
      <Stack.Screen 
        name="payment-methods/index" 
        options={{ 
          headerShown: false,
          title: 'Payment Methods'
        }} 
      />
      <Stack.Screen 
        name="transaction-history/index" 
        options={{ 
          headerShown: false,
          title: 'Transaction History'
        }} 
      />
    </Stack>
  );
}