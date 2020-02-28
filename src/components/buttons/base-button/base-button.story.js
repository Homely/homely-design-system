import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import {BaseButton} from './base-button';

export default {
  title: 'Design System|Button',
  parameters: {
    component: BaseButton,
    componentSubtitle:
      'Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”'
  }
};

export const base = () => <BaseButton>Base Button</BaseButton>;
