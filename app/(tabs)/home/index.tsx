import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';
import { getThemeColors } from '@/constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';
import { useStatusBarColor } from '@/hooks/useStatusBarColor';
import { addExample, fetchExamples } from '@/redux/features/example/exampleSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import styles from './styles';

const HomeScreen = () => {
  const { isDark } = useTheme();
  const colors = getThemeColors(isDark);
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.example);

  useStatusBarColor({ screen: 'default' });

  useEffect(() => {
    dispatch(fetchExamples());
  }, [dispatch]);

  const handleAddItem = () => {
    dispatch(addExample(`New idea #${items.length + 1}`));
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerRow}>
        <View style={styles.headerText}>
          <Text style={[styles.eyebrow, { color: colors.textSecondary }]}>
            Starter kit
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>Home</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>Auth state</Text>
        <Text style={[styles.cardBody, { color: colors.textSecondary }]}>
          Replace the mock login in the auth slice with your API of choice. Redux Toolkit is already wired up.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderText}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Example slice</Text>
            <Text style={[styles.cardBody, { color: colors.textSecondary }]}>
              Fetches a few strings and lets you add more.
            </Text>
          </View>
          <CustomButton
            label="Add"
            onPress={handleAddItem}
            variant="secondary"
            loading={loading}
            style={styles.addButton}
          />
        </View>
        <View style={styles.list}>
          {items.map((item, index) => (
            <View
              key={`${item}-${index}`}
              style={[
                styles.listItem,
                { borderColor: colors.border, backgroundColor: colors.background },
              ]}
            >
              <Text style={{ color: colors.text }}>{item}</Text>
            </View>
          ))}
          {!items.length && (
            <Text style={{ color: colors.textSecondary }}>
              Tap "Add" to create your first item.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
