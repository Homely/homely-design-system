import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/shared/theme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
