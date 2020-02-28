import React from 'react';
import PropTypes from 'prop-types';
import { usePageInfo } from '../../../context/pageInfo-context';
import FlatButtonSc from './flat-button.style';

const propTypes = {
  /**
    The content to display inside the button
   */
  children: PropTypes.node.isRequired
};

/**
Use for less important or less commonly used actions since they’re less prominent. For example, plain buttons are used as actions in cards.
**/

export const FlatButton = ({ children, ...props }) => {
  const { isDesktop } = usePageInfo();
  return (
    <FlatButtonSc isDesktop={isDesktop} {...props}>
      {children}
    </FlatButtonSc>
  );
};

FlatButton.propTypes = propTypes;
