import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../AppText/AppText';
import Space from '../Space/Space';
import {styles} from './styles';

const Icon = props => {
  const {
    SVGIcon = null,
    iconLeft = true,
    mL = 0,
    title = '',
    alignText = 'center',
    alignSelf = 'center',
    textVariant = 'body2',
    onPress = () => {},
    activeOpacity,
    extraStyle = {text: {}, icon: {}},
  } = props;
  const style = styles;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={[style.iconContainer(alignSelf, iconLeft), extraStyle.icon]}>
        {SVGIcon && SVGIcon}
      </TouchableOpacity>
      {iconLeft && <Space mL={mL} />}
      {title && (
        <AppText
          textAlign={alignText}
          title={title}
          variant={textVariant}
          extraStyle={extraStyle.text}
        />
      )}
    </>
  );
};

export default Icon;
