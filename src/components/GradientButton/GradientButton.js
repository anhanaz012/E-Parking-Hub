import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS, COMMON_COLORS, Fonts} from '../../assets/theme';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
const GradientButton = props => {
  const {
    variant = 'filled',
    onPress = () => {},
    extraStyle = {btnContainer: {}, text: {}},
    iconLeft = null,
    iconRight = null,
    activeOpacity = 0.8,
    fontFamily = Fonts.latoRegular,
    title,
    theme,
    textVariant = 'body2',
    textColor,
    mL = 0,
    mR = 0,
  } = props;
  const style = styles(variant, theme);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <LinearGradient
        colors={[COMMON_COLORS.gradientBlue,'purple', COMMON_COLORS.gradientPurple]}
        style={[style.btnContainer, extraStyle.btnContainer]}
        {...props}>
        {iconLeft && (
          <>
            <Icon SVGIcon={iconLeft} iconLeft={true} onPress = {onPress}/>
            <Space mL={mL} />
          </>
        )}
        <AppText
          title={title}
          variant={textVariant}
          color={textColor}
          fontFamily={fontFamily ? fontFamily : Fonts.latoRegular}
          onPress={onPress}
          extraStyle={extraStyle.text}
        />
        {iconRight && (
          <>
            <Space mR={mR} />
            <Icon SVGIcon={iconRight} iconLeft={false} />
          </>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
