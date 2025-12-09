import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import styles from './styles';

const WithdrawScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Withdraw Funds" />
      <View style={styles.content}>
        <Text style={styles.text}>This is Withdraw Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default WithdrawScreen;