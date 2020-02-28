import React from 'react';
import PropTypes from 'prop-types';
import SolidButtonSc from './solid-button.style';

const propTypes = {
  children: PropTypes.node.isRequired
};

export const SolidButton = ({ children, ...props }) => (
  <SolidButtonSc {...props}>{children}</SolidButtonSc>
);

SolidButton.propTypes = propTypes;
