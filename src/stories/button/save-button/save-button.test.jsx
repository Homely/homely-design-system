import 'jest-styled-components';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SaveButton from './save-button';
import { withTheme } from '../../../utils/provider';

const defaultProps = {
  listingId: 1,
  label: 'Save',
  labelChecked: 'Saved',
  isLarge: true,
  isPrimary: true,
  isChecked: true,
  collections: [],
  pageElementPosition: 'div'
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders button with correct label', () => {
  act(() => {
    render(withTheme(<SaveButton {...defaultProps} />), container);
  });
  expect(container.textContent).toBe('Saved');
});
