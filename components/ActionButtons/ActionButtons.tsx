import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';
import styles from './styles';
import DepositIcon from '@/assets/svgs/deposit.svg';
import WithdrawIcon from '@/assets/svgs/withdraw.svg';

interface ActionItem {
  id: string;
  title: string;
  icon?: string; // For Ionicons
  iconType: 'ionicon' | 'svg';
  SvgComponent?: React.ComponentType<any>; // For custom SVGs
  onPress: () => void;
}

const ActionButtons: React.FC = () => {
  const actions: ActionItem[] = [
    {
      id: 'deposit',
      title: 'Deposit',
      iconType: 'svg',
      SvgComponent: DepositIcon,
      onPress: () => router.push('/(finance)/deposit'),
    },
    {
      id: 'persona',
      title: 'Investor Persona',
      icon: 'person-outline',
      iconType: 'ionicon',
      // onPress: () => router.push('/(investor)/persona'),
      onPress: () => router.push('/(finance)/deposit'),
    },
    {
      id: 'withdraw',
      title: 'Withdraw',
      iconType: 'svg',
      SvgComponent: WithdrawIcon,
      onPress: () => router.push('/(finance)/withdraw'),
    },
  ];

  const renderIcon = (action: ActionItem) => {
    if (action.iconType === 'svg' && action.SvgComponent) {
      const SvgComponent = action.SvgComponent;
      return (
        <SvgComponent
          width={24}
          height={24}
          color={Colors.primary}
          fill={Colors.primary}
        />
      );
    } else if (action.iconType === 'ionicon' && action.icon) {
      return (
        <Ionicons
          name={action.icon as any}
          size={24}
          color={Colors.primary}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <View key={action.id} style={styles.viewWrapper}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={action.onPress}
          >
            {renderIcon(action)}
          </TouchableOpacity>
          <Text style={styles.actionText}>{action.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default ActionButtons;