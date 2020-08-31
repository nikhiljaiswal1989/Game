import { put, takeLatest, select, delay } from 'redux-saga/effects';
import {
  ON_CLICK_CARD,
  incrementCounter,
  openCard,
  refreshGame,
} from '../../actions/gameActions';
import { getNewCardObjectArray } from '../../utils/utilFunctions';

export const gameSelector = (s) => s.game;

export function* onClickFunction(action) {
  const { cardObjectArray, clickedIndexArray, counter } = yield select(
    gameSelector,
  );
  yield put(incrementCounter(counter + 1));
  yield put(openCard(action.index, cardObjectArray, clickedIndexArray));
  yield delay(1000);
  yield put(
    refreshGame(getNewCardObjectArray(cardObjectArray, clickedIndexArray), []),
  );
}

export function* gameWatcher() {
  yield takeLatest(ON_CLICK_CARD, onClickFunction);
}
