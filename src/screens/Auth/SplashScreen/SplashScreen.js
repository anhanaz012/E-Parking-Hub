import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES} from '../../../assets/images';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../assets/theme';
import AppLogo from '../../../components/AppLogo/AppLogo';
import AppText from '../../../components/AppText/AppText';
import {styles} from './styles';
import { LABELS } from '../../../labels';

const SplashScreen = () => {
  const style = styles;
  return (
    <LinearGradient
      style={[STYLES.flex(1), STYLES.AICenter, STYLES.JCCenter]}
      colors={[
        COMMON_COLORS.splashBg,
        COMMON_COLORS.white,
        COMMON_COLORS.splashBg,
      ]}>
      <View style={[STYLES.AICenter, STYLES.JCCenter]}>
        <AppLogo
          source={IMAGES.LOGO}
          resizeMode={'contain'}
          height={100}
          width={180}
        />
        <AppText
          title={LABELS.title}
          color={COLORS.dark.secondary}
          variant={'h2'}
          fontFamily={Fonts.merriWeatherBold}
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
