import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import {OutlineButton} from '.';

export default {
  title: 'Design System|Button',

  parameters: {
    component: OutlineButton
  }
};

export const outlineButton = () => <OutlineButton>Outline Button</OutlineButton>;
