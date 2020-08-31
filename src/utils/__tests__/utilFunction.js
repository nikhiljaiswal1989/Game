import { getNewCardObjectArray } from '../utilFunctions';

import mockData from '../../mockData/initialState.json';
const newCardObject = [
  {
    isMatchFound: false,
    isOpen: false,
    text: 60,
  },
  {
    isMatchFound: false,
    isOpen: false,
    text: 60,
  },
  {
    isMatchFound: false,
    isOpen: false,
    text: 74,
  },
  {
    isMatchFound: true,
    isOpen: true,
    text: 56,
  },
  {
    isMatchFound: true,
    isOpen: true,
    text: 56,
  },
  {
    isMatchFound: false,
    isOpen: false,
    text: 74,
  },
];
describe('getNewCardObjectArray functions', () => {
  it('getNewCardObjectArray should return newCardObject', () => {
    expect(
      getNewCardObjectArray(mockData.cardObjectArray, [1, 2, 3, 4]),
    ).toEqual(newCardObject);
  });
});
