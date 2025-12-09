import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton/CustomButton';
import ScreenHeader from '@/components/ScreenHeader/ScreenHeader';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

import OnboardingBg from '@/assets/images/backgrounds/onboarding-bg.png';

type SurveyOption = 'social-media' | 'linkedin' | 'friends-family' | null;

const SurveyScreen = () => {
  const [selectedOption, setSelectedOption] = useState<SurveyOption>(null);
  const [isLoading, setIsLoading] = useState(false);

  const surveyOptions = [
    { id: 'social-media', label: 'Social Media' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'friends-family', label: 'Friends & Family' },
  ];

  const handleOptionSelect = (optionId: SurveyOption) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = async () => {
    if (!selectedOption) return;
    
    setIsLoading(true);
    
    console.log('Survey response:', selectedOption);
    
    setTimeout(() => {
      setIsLoading(false);
      router.navigate('/(auth)/permissions-push-notification');
    }, 1000);
  };

  return (
    <>
      <ImageBackground 
        source={OnboardingBg} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {/* <ScreenHeader title="" showBackButton={false} /> */}
          
          <View style={styles.content}>
            <View style={styles.questionSection}>

            <View style={styles.optionsSection}>
              <Text style={styles.question}>How did you hear about us?</Text>

              {surveyOptions.map((option) => {
                const isSelected = selectedOption === option.id;
                
                return (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.optionItem,
                      isSelected && styles.selectedOptionItem
                    ]}
                    onPress={() => handleOptionSelect(option.id as SurveyOption)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.optionText,
                      isSelected && styles.selectedOptionText
                    ]}>
                      {option.label}
                    </Text>
                    
                    <View style={[
                      styles.radioButton,
                      isSelected && styles.selectedRadioButton
                    ]}>
                      {isSelected && (
                        <Ionicons 
                          name="checkmark" 
                          size={16} 
                          color={Colors.primary} 
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            </View>

            <View style={styles.buttonSection}>
              <CustomButton
                label="Submit"
                onPress={handleSubmit}
                backgroundColor={Colors.primary}
                textColor={Colors.common.white}
                disabled={!selectedOption}
                loading={isLoading}
                buttonStyle={styles.submitButton}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default SurveyScreen;