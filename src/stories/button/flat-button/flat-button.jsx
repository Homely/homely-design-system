import React from 'react';
import PropTypes from 'prop-types';
import { usePageInfo } from '../../../context/pageInfo-context';
import FlatButtonSc from './flat-button.style';

const propTypes = {
  children: PropTypes.node.isRequired
};

const FlatButton = ({ children, ...props }) => {
  const { isDesktop } = usePageInfo();
  return (
    <FlatButtonSc isDesktop={isDesktop} {...props}>
      {children}
    </FlatButtonSc>
  );
};

FlatButton.propTypes = propTypes;

export default FlatButton;
