import React from 'react';
import {View} from 'react-native';
import Icon from '../Icon/Icon';
import {SVG} from '../../assets/svg';
import {COLORS, COMMON_COLORS} from '../../assets/theme';

const Checkbox = props => {
  const {theme, isChecked, onPress, size, color, style, disabled} = props;

  return (
    <>
      {isChecked ? (
        <Icon
          onPress={onPress}
          SVGIcon={
            <SVG.filledCheckbox
              fill={color ? color : COMMON_COLORS.secondary}
              height={size}
              width={size}
            />
          }
        />
      ) : (
        <Icon
          SVGIcon={
            <SVG.unfilledCheckbox
              fill={color ? color : COMMON_COLORS.secondary}
              onPress={onPress}
              height={size}
              width={size}
            />
          }
          onPress={onPress}
        />
      )}
    </>
  );
};

export default Checkbox;
