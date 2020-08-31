import { INITIAL_STATE } from './initialState';
import {
  RESTART_GAME,
  INCREMENT_COUNTER,
  OPEN_CARD,
  REFRESH,
} from '../../actions/gameActions';
export default (gameState = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTART_GAME:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        counter: action.counter,
        clickedIndexArray: [],
        isFinish: false,
      };
    case INCREMENT_COUNTER:
      return {
        ...gameState,
        counter: action.payload,
      };
    case OPEN_CARD:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        clickedIndexArray: action.clickedIndexArray,
      };
    case REFRESH:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        clickedIndexArray: action.clickedIndexArray,
        isFinish: action.isFinish,
      };
    default:
      return gameState;
  }
};
