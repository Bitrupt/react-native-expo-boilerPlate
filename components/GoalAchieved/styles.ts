import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 16,
  },
  leftSection: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: Colors.common.white,
    marginBottom: 8,
  },
  amount: {
    fontSize: 28,
    fontFamily: 'Montserrat_600SemiBold',
    color: Colors.common.white,
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    position: 'absolute',
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: Colors.common.white,
  },
});

export default styles;