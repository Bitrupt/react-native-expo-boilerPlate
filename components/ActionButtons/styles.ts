import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  viewWrapper:{
    flex: 1,
    alignItems: 'center',
    borderColor: Colors.backgrounds.primary,
  },
  actionButton: {

    padding: 20,
    backgroundColor: Colors.common.blue + '20',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.backgrounds.primary,
  },
  actionText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium',
    color: Colors.common.blue,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default styles;