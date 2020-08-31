import gameReducer from '../index';
import { refreshGame, restartGame } from '../../../actions/gameActions';
import mockData from '../../../mockData/initialState.json';
describe('Game Reducers', () => {
  let currentState = mockData;

  it('should set cardObjectArray when REFRESH action is dispatched', () => {
    currentState = gameReducer(
      currentState,
      refreshGame(mockData.cardObjectArray, mockData.clickedIndexArray),
    );
    expect(currentState.cardObjectArray).toEqual(mockData.cardObjectArray);
  });

  it('should reset everything  when RESTART_GAME action is dispatched', () => {
    currentState = gameReducer(
      currentState,
      restartGame(mockData.cardObjectArray, mockData.clickedIndexArray),
    );
    expect(currentState.counter).toEqual(0);
  });
});
