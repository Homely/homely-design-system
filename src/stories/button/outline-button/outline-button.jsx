import React from 'react';
import PropTypes from 'prop-types';
import OutlineButtonSc from './outline-button.style';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const OutlineButton = ({ children, ...props }) => (
  <OutlineButtonSc {...props}>{children}</OutlineButtonSc>
);

OutlineButton.propTypes = propTypes;

export default OutlineButton;
