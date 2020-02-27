import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import themeDecorator from './theme-decorator';

addDecorator(themeDecorator);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
