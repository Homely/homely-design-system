import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';
import themeDecorator from './theme-decorator';
import pageInfoDecorator from './page-info-decorator';

addDecorator(themeDecorator);
addDecorator(pageInfoDecorator);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
