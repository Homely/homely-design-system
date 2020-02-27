import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import FlatButton from './flat-button';

export default {
  title: 'Design System|Button',

  parameters: {
    component: FlatButton
  }
};

export const flatButton = () => <FlatButton>Flat Button</FlatButton>;
