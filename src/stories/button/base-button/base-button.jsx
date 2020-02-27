import React from 'react';
import PropTypes from 'prop-types';
import BaseButtonSc from './base-button.style';

const propTypes = {
  children: PropTypes.node.isRequired
};

const BaseButton = ({ children, ...props }) => (
  <BaseButtonSc type="button" {...props}>
    {children}
  </BaseButtonSc>
);

BaseButton.propTypes = propTypes;

export default BaseButton;
