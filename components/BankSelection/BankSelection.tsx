import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from './styles';
import Monzo from '@/assets/images/monzo.png';
import Rovolut from '@/assets/images/rovlut.png';

interface BankAccount {
  id: string;
  name: 'monzo' | 'revolut';
  accountNumber: string;
}

interface BankSelectionProps {
  selectedBankId?: string;
  onBankSelect: (bankId: string) => void;
  onConnectBank: () => void;
}

const BankSelection: React.FC<BankSelectionProps> = ({ 
  selectedBankId, 
  onBankSelect, 
  onConnectBank 
}) => {
  const bankAccounts: BankAccount[] = [
    { id: '1', name: 'monzo', accountNumber: '••3456' },
    { id: '2', name: 'revolut', accountNumber: '••7890' },
  ];

  const renderBankIcon = (name: 'monzo' | 'revolut') => {
    const imageSource = name === 'monzo' ? Monzo : Rovolut;
    
    return (
      <Image
        source={imageSource}
        style={styles.bankIcon}
        resizeMode="contain"
      />
    );
  };

  const getBankDisplayName = (name: 'monzo' | 'revolut') => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <View style={styles.container}>
      {bankAccounts.map((bank) => (
        <TouchableOpacity
          key={bank.id}
          style={[
            styles.bankRow,
            selectedBankId === bank.id && styles.selectedBankRow
          ]}
          onPress={() => onBankSelect(bank.id)}
        >
          <View style={styles.bankInfo}>
            <View style={styles.bankIconContainer}>
              {renderBankIcon(bank.name)}
            </View>
            <Text style={styles.bankText}>
              {getBankDisplayName(bank.name)} {bank.accountNumber}
            </Text>
          </View>
          <View style={[
            styles.checkBox,
            selectedBankId === bank.id && styles.selectedCheckBox
          ]}>
            {selectedBankId === bank.id && (
              <Ionicons 
                name="checkmark" 
                size={16} 
                color={Colors.primary} 
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.connectBankRow} onPress={onConnectBank}>
        <Ionicons name="add" size={20} color={Colors.primary} />
        <Text style={styles.connectBankText}>Connect another bank account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BankSelection;