import React from 'react';
import PropTypes from 'prop-types';
import OutlineButtonSc from './outline-button.style';

const propTypes = {
  /**
    The content to display inside the button
   */
  children: PropTypes.node.isRequired
};

/**
Use against shaded or colorful backgrounds. An outline button will maintain the appropriate visual weight and won’t clash with the background color.
**/
export const OutlineButton = ({ children, ...props }) => (
  <OutlineButtonSc {...props}>{children}</OutlineButtonSc>
);

OutlineButton.propTypes = propTypes;
