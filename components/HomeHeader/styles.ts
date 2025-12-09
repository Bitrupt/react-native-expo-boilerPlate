import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 16,
    backgroundColor: Colors.grayscale[400] + '10',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 38,
    height: 38,
    marginRight: 2,
  },
  appName: {
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    color: Colors.common.white,
  },
  notificationButton: {
    padding: 8,
  },
});

export default styles;