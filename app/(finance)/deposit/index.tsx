import React, { useState, useEffect } from 'react';
import { View, ScrollView, Keyboard, Dimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import CustomButton from '@/components/CustomButton/CustomButton';
import DepositTabs from '@/components/DepositTabs/DepositTabs';
import AmountInput from '@/components/AmountInput/AmountInput';
import PaymentMethodTabs from '@/components/PaymentMethodTabs/PaymentMethodTabs';
import CardSelection from '@/components/CardSelection/CardSelection';
import BankSelection from '@/components/BankSelection/BankSelection';
import RecurringOptions from '@/components/RecurringOptions/RecurringOptions';
import { Colors } from '@/constants/Colors';
import styles from './styles';


const DepositScreen = () => {
  const [activeTab, setActiveTab] = useState<'oneTime' | 'recurring'>('oneTime');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [selectedCardId, setSelectedCardId] = useState<string>('1');
  const [selectedBankId, setSelectedBankId] = useState<string>('1');
  const [recurringFrequency, setRecurringFrequency] = useState<'weekly' | 'monthly' | 'quarterly'>('monthly');
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
        setIsKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleConfirmDeposit = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      console.log('Please enter a valid amount');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Depositing:', { 
        amount: parseFloat(amount), 
        paymentMethod,
        selectedPaymentId: paymentMethod === 'card' ? selectedCardId : selectedBankId,
        type: activeTab,
        frequency: activeTab === 'recurring' ? recurringFrequency : undefined
      });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Deposit successful!');
      setAmount('');
      
    } catch (error) {
      console.error('Deposit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCard = () => {
    router.push('/add-card');
  };

  const handleConnectBank = () => {
    console.log('Connect bank account');
  };

  const isValidAmount = amount && parseFloat(amount) > 0;
  const hasSelectedPayment = paymentMethod === 'card' ? selectedCardId : selectedBankId;

  const buttonContainerStyle = {
    position: 'absolute' as const,
    bottom: isKeyboardVisible ? keyboardHeight : Math.max(insets.bottom, 20),
    left: 0,
    right: 0,
    backgroundColor: Colors.backgrounds.black,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: isKeyboardVisible ? 20 : Math.max(insets.bottom, 20),
    borderTopColor: Colors.grayscale[800],
    shadowColor: Colors.backgrounds.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },

  };

  const scrollContentPaddingBottom = isKeyboardVisible 
    ? keyboardHeight + 100 
    : Math.max(insets.bottom, 20) + 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Deposit Funds" reducedPadding={true} />
      
      <View style={styles.contentContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: scrollContentPaddingBottom }
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={false}
        >
          <DepositTabs 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <AmountInput
            value={amount}
            onChangeText={setAmount}
          />

          <PaymentMethodTabs
            selectedMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
          />

          {paymentMethod === 'card' ? (
            <CardSelection
              selectedCardId={selectedCardId}
              onCardSelect={setSelectedCardId}
              onAddCard={handleAddCard}
            />
          ) : (
            <BankSelection
              selectedBankId={selectedBankId}
              onBankSelect={setSelectedBankId}
              onConnectBank={handleConnectBank}
            />
          )}

          {activeTab === 'recurring' && (
            <RecurringOptions
              selectedFrequency={recurringFrequency}
              onFrequencyChange={setRecurringFrequency}
            />
          )}
        </ScrollView>
      </View>

      <View style={buttonContainerStyle}>
        <CustomButton
          label={`Confirm ${activeTab === 'oneTime' ? 'Deposit' : 'Recurring Deposit'}`}
          onPress={handleConfirmDeposit}
          loading={isLoading}
          disabled={!isValidAmount || !hasSelectedPayment}
          backgroundColor={isValidAmount && hasSelectedPayment ? Colors.primary : Colors.grayscale[600]}
        />
      </View>
    </SafeAreaView>
  );
};



export default DepositScreen;