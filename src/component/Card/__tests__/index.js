import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../index';
describe('DottedLine component', () => {
  it('renders', () => {
    const item = { isMatchFound: false, isOpen: true, text: 'text' };
    const tree = render(<Card item={item} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
