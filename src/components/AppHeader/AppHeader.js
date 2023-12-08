import React from 'react';
import {View} from 'react-native';
import {COLORS, Fonts} from '../../assets/theme';
import AppText from '../AppText/AppText';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';
import {styles} from './styles';

const AppHeader = props => {
  const {
    iconLeft = null,
    iconRight = null,
    onLeftIconPress = () => {},
    onRightIconPress = () => {},
    mL = 0,
    title,
    theme,
    textVariant,
    fontFamily = Fonts.merriWeatherSansRegular,
    extraStyle = {container: {}},
    children = null,
  } = props;
  const style = styles(theme);
  return (
    <View style={[style.headerContainer, extraStyle.container]}>
      <View style={style.leftContainer}>
        {iconLeft && (
          <>
            <Icon
              SVGIcon={iconLeft}
              iconLeft={true}
              onPress={onLeftIconPress}
            />
            <Space mL={mL} />
          </>
        )}
        {title && (
          <>
            <View>
              <AppText
                variant={textVariant ? textVariant : 'h3'}
                title={title}
                color={COLORS[theme].text}
                fontFamily={fontFamily}
              />
              {children && children}
            </View>
          </>
        )}
      </View>
      <View style={style.rightContainer}>
        {iconRight && (
          <Icon
            alignSelf={'flex-end'}
            SVGIcon={iconRight}
            iconLeft={false}
            onPress={onRightIconPress}
          />
        )}
      </View>
    </View>
  );
};

export default AppHeader;
