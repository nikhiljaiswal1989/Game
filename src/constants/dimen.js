import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const dimen = {
  cardHeight: (height - 150) / 4,
  cardWidth: width / 3,
};
