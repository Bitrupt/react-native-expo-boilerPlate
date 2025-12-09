import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton/CustomButton';
import { Colors } from '@/constants/Colors';
import SuccessTick from '@/assets/images/illustrations/successTick.png';
import styles from './styles';

interface SuccessModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible, title, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        <View style={styles.container}>
          <View style={styles.content}>
            {/* Success Icon */}
            <View style={styles.iconContainer}>
              {/* <Ionicons 
                name="checkmark-circle" 
                size={64} 
                color={Colors.primary} 
              /> */}
              <Image source={SuccessTick}/>
            </View>
            
            {/* Title */}
            <Text style={styles.title}>{title}</Text>
            
            {/* Close Button */}
            <CustomButton
              label="Close"
              onPress={onClose}
              backgroundColor={Colors.primary}
              textColor={Colors.common.white}
              buttonStyle={styles.button}
              
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default SuccessModal;