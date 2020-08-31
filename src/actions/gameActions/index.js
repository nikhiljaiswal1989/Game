export const RESTART_GAME = 'RESTART_GAME';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const REFRESH = 'REFRESH';
export const ON_CLICK_CARD = 'ON_CLICK_CARD';
export const OPEN_CARD = 'OPEN_CARD';
import { getCardObjectArray } from '../../utils/utilFunctions';
import { cardObject } from '../../utils/utilFunctions';
export const onClickCard = (index) => ({
  type: ON_CLICK_CARD,
  index,
});

export const openCard = (index, cardObjectArray, clickedIndexArray) => {
  cardObjectArray[index] = cardObject(true, cardObjectArray[index].text);
  clickedIndexArray.push(index);
  return {
    type: OPEN_CARD,
    cardObjectArray,
    clickedIndexArray,
  };
};

export const incrementCounter = (counter) => {
  return { type: INCREMENT_COUNTER, payload: counter };
};

export const refreshGame = (cardObjectArray, clickedIndexArray) => {
  var isFinish = true;
  for (let i = 0; i < cardObjectArray.length; i++) {
    if (!cardObjectArray[i].isMatchFound) {
      isFinish = false;
    }
  }

  return {
    type: REFRESH,
    cardObjectArray,
    clickedIndexArray,
    isFinish,
  };
};

export const restartGame = () => ({
  type: RESTART_GAME,
  cardObjectArray: getCardObjectArray(),
  counter: 0,
});
