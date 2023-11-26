import React from 'react';
import {Text} from 'react-native';
import {FONTS, Fonts, STYLES, TYPOGRAPHY} from '../../assets/theme';

const AppText = props => {
  const {
    children = null,
    textAlign = 'left',
    color = 'black',
    variant = 'body1',
    extraStyle = {},
    title = '',
    fontFamily = Fonts.merriWeatherBold,
    onPress = () => {},
  } = props;

  return (
    <>
      <Text
        {...props}
        onPress={onPress}
        style={[
          STYLES.fontSize(
            TYPOGRAPHY[variant].fontSize ? TYPOGRAPHY[variant].fontSize : 14,
          ),
          STYLES.fontFamily(fontFamily),
          STYLES.textAlign(textAlign),
          STYLES.color(color ? color : 'black'),
          extraStyle,
        ]}>
        {title}
      </Text>
      {children && children}
    </>
  );
};

export default AppText;
