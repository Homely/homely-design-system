import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { SaveButton } from '.';

export default {
  title: 'Design System|Button',

  parameters: {
    component: SaveButton
  }
};

export const saveButton = () => (
  <SaveButton
    listingId={1}
    label="Add to collections"
    labelChecked="Saved to collection"
    isLarge={boolean('isLarge', true)}
    isPrimary={boolean('isPrimary', true)}
    pageElementPosition="contact form success"
  >
    Save Button
  </SaveButton>
);
