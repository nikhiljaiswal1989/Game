import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GameBoard from '../index';
import { Alert } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import mockData from '../../../mockData/initialState.json';
const mockStore = configureStore();
const store = mockStore({
  game: { ...mockData, isFinish: true },
});

describe('Empty CreateTrip Container ', () => {
  const tree = render(
    <Provider store={store}>
      <GameBoard />
    </Provider>,
  );
  const spy = jest.spyOn(Alert, 'alert');
  it('renders', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('show alert dialog', () => {
    render(
      <Provider store={store}>
        <GameBoard />
      </Provider>,
    );
    Alert.alert.mock.calls[0][2][0].onPress();
    expect(store.getState().game.counter).toEqual(0);
    expect(spy).toHaveBeenCalled();
  });

  it('on Restart press', () => {
    const tree = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>,
    );
    fireEvent.press(tree.getByTestId('restart'));
    expect(store.getState().game.counter).toEqual(0);
  });

  it('on Card press', () => {
    const tree = render(
      <Provider store={store}>
        <GameBoard />
      </Provider>,
    );
    fireEvent.press(tree.getByTestId('card0'));
    expect(store.getState().game.counter).toEqual(0);
  });
});
