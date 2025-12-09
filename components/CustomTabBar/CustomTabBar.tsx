import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import styles from './styles';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const getIconName = (routeName: string, focused: boolean) => {
    switch (routeName) {
      case 'home/index':
        return focused ? 'home' : 'home-outline';
      case 'portfolio/index':
        return focused ? 'document-text' : 'document-text-outline';
      case 'rewards/index':
        return focused ? 'star' : 'star-outline';
      case 'goals/index':
        return focused ? 'flag' : 'flag-outline';
      case 'profile/index':
        return focused ? 'person' : 'person-outline';
      default:
        return 'home-outline';
    }
  };

  const mainTabs = ['home/index', 'portfolio/index', 'rewards/index', 'goals/index', 'profile/index'];
  const filteredRoutes = state.routes.filter(route => mainTabs.includes(route.name));

  return (
    <View style={styles.container}>
      {filteredRoutes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === state.routes.findIndex(r => r.key === route.key);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = getIconName(route.name, isFocused);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={styles.tabItem}
            activeOpacity={0.7}
          >
            <View style={[
              styles.iconContainer,
              isFocused && styles.activeIconContainer
            ]}>
              <Ionicons
                name={iconName as any}
                size={24}
                color={isFocused ? Colors.common.primary : Colors.common.white}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;