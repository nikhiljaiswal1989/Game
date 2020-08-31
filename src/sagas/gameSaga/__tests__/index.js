import { takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { gameWatcher, onClickFunction, gameSelector } from '../index';
import { ON_CLICK_CARD } from '../../../actions/gameActions';
import mockData from '../../../mockData/initialState.json';
import gameReducer from '../../../reducers/game';
describe('Game Saga', () => {
  it('should trigger on SUBMIT_FORM action', () => {
    expect(gameWatcher().next().value).toEqual(
      takeLatest(ON_CLICK_CARD, onClickFunction),
    );
  });

  test('gameSelectorFunction', () => {
    expect(gameSelector({ game: true })).toBeTruthy();
  });

  it('gets data from api successfully', () => {
    return expectSaga(onClickFunction, {
      index: 0,
    })
      .provide({
        select() {
          return mockData;
        },
      })
      .withReducer(gameReducer, mockData)
      .hasFinalState({
        ...mockData,
        counter: 1,
      })
      .run();
  });
});
