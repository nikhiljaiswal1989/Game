import { StyleSheet } from 'react-native';
import { color, dimen } from '../../constants';
const styles = StyleSheet.create({
  cardContainer: {
    height: dimen.cardHeight,
    width: dimen.cardWidth,
    borderWidth: 4,
    borderColor: 'transparent',
    padding: 4,
  },
  cardNotOpen: {
    flex: 1,
    backgroundColor: color.primaryColor,
    padding: 8,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOpen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openNumber: {
    fontSize: 24,
    color: '#000',
  },
  closeNumber: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
});

export default styles;
