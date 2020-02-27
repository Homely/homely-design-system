import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import BaseButton from './base-button';

export default {
  title: 'Design System|Button',

  parameters: {
    component: BaseButton
  }
};

export const base = () => (
  <BaseButton
    loading={boolean('Loading')}
    onClick={action('button action click')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
  >
    Base Button
  </BaseButton>
);
