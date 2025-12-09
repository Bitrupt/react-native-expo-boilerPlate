import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Keyboard, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import CustomButton from '@/components/CustomButton/CustomButton';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import { Colors } from '@/constants/Colors';
import styles from './styles';

import Visa from '@/assets/images/visa.png';
import MasterCard from '@/assets/images/mastercard.png';

interface CardFormData {
  holderName: string;
  number: string;
  expiryDate: string;
  cvv: string;
}

interface CardFormErrors {
  holderName?: string;
  number?: string;
  expiryDate?: string;
  cvv?: string;
}

const AddCardScreen = () => {
  const [formData, setFormData] = useState<CardFormData>({
    holderName: '',
    number: '',
    expiryDate: '',
    cvv: '',
  });
  const [formErrors, setFormErrors] = useState<CardFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [addedCardInfo, setAddedCardInfo] = useState<string>('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  
  const insets = useSafeAreaInsets();

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

  const formatCardNumber = (text: string) => {
    const digits = text.replace(/\D/g, '');
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted.substring(0, 19);
  };

  const formatExpiryDate = (text: string) => {
    const digits = text.replace(/\D/g, '');
    if (digits.length >= 2) {
      return digits.substring(0, 2) + '/' + digits.substring(2, 4);
    }
    return digits;
  };

  const validateForm = (): boolean => {
    const errors: CardFormErrors = {};

    if (!formData.holderName.trim()) {
      errors.holderName = 'Card holder name is required';
    }

    const cardNumber = formData.number.replace(/\s/g, '');
    if (!cardNumber) {
      errors.number = 'Card number is required';
    } else if (cardNumber.length < 16) {
      errors.number = 'Card number must be 16 digits';
    }

    if (!formData.expiryDate) {
      errors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = 'Invalid expiry date format (MM/YY)';
    }

    if (!formData.cvv) {
      errors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3) {
      errors.cvv = 'CVV must be 3 digits';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getCardType = (number: string): 'visa' | 'mastercard' | 'unknown' => {
    const digits = number.replace(/\s/g, '');
    if (digits.startsWith('4')) return 'visa';
    if (digits.startsWith('5') || digits.startsWith('2')) return 'mastercard';
    return 'unknown';
  };

  const renderCardIcon = () => {
    const cardNumber = formData.number.replace(/\s/g, '');
    if (cardNumber.length < 1) return null;
    
    const cardType = getCardType(cardNumber);
    if (cardType === 'unknown') return null;
    
    const iconSource = cardType === 'visa' ? Visa : MasterCard;
    
    return (
      <Image
        source={iconSource}
        style={styles.cardTypeIcon}
        resizeMode="contain"
      />
    );
  };

  const handleConfirmCard = async () => {
    setFormErrors({});

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const cardNumber = formData.number.replace(/\s/g, '');
      const cardType = getCardType(cardNumber);
      const lastFour = cardNumber.slice(-4);
      
      setAddedCardInfo(`${cardType === 'visa' ? 'Visa' : 'Mastercard'} ending with ${lastFour}`);
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error('Add card failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof CardFormData, value: string) => {
    let formattedValue = value;
    
    if (field === 'number') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 3);
    }

    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    router.back();
  };

  const isFormValid = (): boolean => {
    return formData.holderName.trim().length > 0 && 
           formData.number.replace(/\s/g, '').length === 16 && 
           formData.expiryDate.length === 5 &&
           formData.cvv.length === 3 &&
           Object.keys(formErrors).length === 0;
  };

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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  const scrollContentPaddingBottom = isKeyboardVisible 
    ? keyboardHeight + 100 
    : Math.max(insets.bottom, 20) + 100;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScreenHeader title="Add Card" reducedPadding={true} />
        
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
            {/* Card Holder Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Card Holder Name</Text>
              <TextInput
                style={[
                  styles.input,
                  formErrors.holderName && styles.inputError
                ]}
                placeholder="Enter card holder name"
                placeholderTextColor={Colors.grayscale[600]}
                value={formData.holderName}
                onChangeText={(text) => handleInputChange('holderName', text)}
                autoCapitalize="words"
                editable={!isLoading}
              />
              {formErrors.holderName && (
                <Text style={styles.errorText}>{formErrors.holderName}</Text>
              )}
            </View>

            {/* Card Number with Icon */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Card Number</Text>
              <View style={styles.cardNumberInputContainer}>
                <TextInput
                  style={[
                    styles.input,
                    styles.cardNumberInput,
                    formErrors.number && styles.inputError
                  ]}
                  placeholder="1234 5678 9012 3456"
                  placeholderTextColor={Colors.grayscale[600]}
                  value={formData.number}
                  onChangeText={(text) => handleInputChange('number', text)}
                  keyboardType="numeric"
                  editable={!isLoading}
                />
                {renderCardIcon()}
              </View>
              {formErrors.number && (
                <Text style={styles.errorText}>{formErrors.number}</Text>
              )}
            </View>

            {/* Expiry Date */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Expiry Date</Text>
              <TextInput
                style={[
                  styles.input,
                  formErrors.expiryDate && styles.inputError
                ]}
                placeholder="MM/YY"
                placeholderTextColor={Colors.grayscale[600]}
                value={formData.expiryDate}
                onChangeText={(text) => handleInputChange('expiryDate', text)}
                keyboardType="numeric"
                editable={!isLoading}
              />
              {formErrors.expiryDate && (
                <Text style={styles.errorText}>{formErrors.expiryDate}</Text>
              )}
            </View>

            {/* CVV */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>CVV</Text>
              <TextInput
                style={[
                  styles.input,
                  formErrors.cvv && styles.inputError
                ]}
                placeholder="123"
                placeholderTextColor={Colors.grayscale[600]}
                value={formData.cvv}
                onChangeText={(text) => handleInputChange('cvv', text)}
                keyboardType="numeric"
                secureTextEntry
                editable={!isLoading}
              />
              {formErrors.cvv && (
                <Text style={styles.errorText}>{formErrors.cvv}</Text>
              )}
            </View>
          </ScrollView>
        </View>

        <View style={buttonContainerStyle}>
          <CustomButton
            label="Confirm Card"
            onPress={handleConfirmCard}
            loading={isLoading}
            disabled={!isFormValid()}
            backgroundColor={isFormValid() ? Colors.primary : Colors.grayscale[600]}
          />
        </View>
      </SafeAreaView>

      <SuccessModal
        visible={showSuccessModal}
        title={`${addedCardInfo} has been added successfully`}
        onClose={handleSuccessModalClose}
      />
    </>
  );
};

export default AddCardScreen;