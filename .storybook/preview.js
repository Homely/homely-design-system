import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { GlobalStyle } from '../src/shared/global';
import themeDecorator from './theme-decorator';
import pageInfoDecorator from './page-info-decorator';


addDecorator(themeDecorator);
addDecorator(pageInfoDecorator);
addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
