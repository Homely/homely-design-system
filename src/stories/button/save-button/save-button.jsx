import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import CollectionHeart from '../../../../collections/components/collection-heart';
import OutlineButton from '../outline-button';
import FlatButton from '../flat-button';
import { IconSc } from './save-button.style';
import { action } from '@storybook/addon-actions';

const propTypes = {
  listingId: PropTypes.number.isRequired,
  label: PropTypes.string,
  labelChecked: PropTypes.string,
  isLarge: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isChecked: PropTypes.bool.isRequired,
  collections: PropTypes.array.isRequired,
  pageElementPosition: PropTypes.string.isRequired
};

const defaultProps = {
  label: 'Save',
  labelChecked: 'Saved',
  isLarge: false,
  isPrimary: false
};

const SaveButton = ({
  listingId,
  label,
  labelChecked,
  isLarge,
  isPrimary,
  isChecked,
  collections,
  pageElementPosition
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressStart = () => setIsPressed(true);
  const handlePressEnd = () => setIsPressed(false);
  const handleMouseDown = () => action('handleMouseDown');
  const handleMouseUp = () => action('handleMouseUp');
  const handlePressCancel = () => isPressed && action('handlePressCancel');

  const Button = isLarge ? OutlineButton : FlatButton;
  const text = !isChecked ? label : labelChecked;
  return (
    <Button
      aria-label={text}
      large={isLarge}
      primary={isPrimary}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handlePressCancel}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressCancel}
    >
      <IconSc isDesktop={isLarge}>
        {/* <CollectionHeart isChecked={isChecked} isPressed={isPressed} /> */}
      </IconSc>
      {isLarge && text}
    </Button>
  );
};

SaveButton.propTypes = propTypes;
SaveButton.defaultProps = defaultProps;

export default SaveButton;
