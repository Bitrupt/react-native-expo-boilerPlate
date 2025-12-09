import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  methodTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.grayscale[800],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grayscale[600] + '50',
    gap: 12,
  },
  selectedMethodTab: {
    borderColor: Colors.primary,
    backgroundColor: Colors.backgrounds.primary,
  },
  methodText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: Colors.grayscale[400],
  },
  selectedMethodText: {
    color: Colors.primary,
  },
});

export default styles;