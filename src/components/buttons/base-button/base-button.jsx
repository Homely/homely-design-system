import React from 'react';
import PropTypes from 'prop-types';
import BaseButtonSc from './base-button.style';

const propTypes = {
  /**
    The content to display inside the button
   */
  children: PropTypes.node.isRequired
};

/**
Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as actions in cards.
**/

export const BaseButton = ({ children, ...props }) => (
  <BaseButtonSc type="button" {...props}>
    {children}
  </BaseButtonSc>
);

BaseButton.propTypes = propTypes;
