import { StyleSheet } from 'react-native';
import { color } from '../../constants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.screenBackground,
    paddingTop: 30,
  },
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  restart: {
    color: color.primaryColor,
    fontSize: 18,
  },
  steps: {
    color: '#fff',
    fontSize: 24,
  },
  counterNumber: {
    color: color.primaryColor,
    fontSize: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
});
