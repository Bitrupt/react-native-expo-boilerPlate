import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from './styles';
import Visa from '@/assets/images/visa.png';
import MasterCard from '@/assets/images/mastercard.png';

interface Card {
  id: string;
  type: 'visa' | 'mastercard';
  ending: string;
}

interface CardSelectionProps {
  selectedCardId?: string;
  onCardSelect: (cardId: string) => void;
  onAddCard: () => void;
}

const CardSelection: React.FC<CardSelectionProps> = ({ 
  selectedCardId, 
  onCardSelect, 
  onAddCard 
}) => {
  const cards: Card[] = [
    { id: '1', type: 'visa', ending: '1342' },
    { id: '2', type: 'mastercard', ending: '2347' },
  ];

  const renderCardIcon = (type: 'visa' | 'mastercard') => {
    const imageSource = type === 'visa' ? Visa : MasterCard;
    
    return (
      <Image
        source={imageSource}
        style={styles.cardIcon}
        resizeMode="contain"
      />
    );
  };

  return (
    <View style={styles.container}>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={[
            styles.cardRow,
            selectedCardId === card.id && styles.selectedCardRow
          ]}
          onPress={() => onCardSelect(card.id)}
        >
          <View style={styles.cardInfo}>
            <View style={styles.cardIconContainer}>
              {renderCardIcon(card.type)}
            </View>
            <Text style={styles.cardText}>
              {card.type === 'visa' ? 'Visa' : 'Mastercard'} Ending with {card.ending}
            </Text>
          </View>
          <View style={[
            styles.checkBox,
            selectedCardId === card.id && styles.selectedCheckBox
          ]}>
            {selectedCardId === card.id && (
              <Ionicons 
                name="checkmark" 
                size={16} 
                color={Colors.primary} 
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.addCardRow} onPress={onAddCard}>
          <Ionicons name="add" size={20} color={Colors.primary} />
          <Text style={styles.addCardText}>Add another card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardSelection;