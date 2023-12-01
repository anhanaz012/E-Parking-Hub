import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IMAGES} from '../../../../assets/images';
import { COMMON_COLORS,Fonts,STYLES } from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const SplashScreen = () => {
  const style = styles;
  return (
    <LinearGradient
      style={[STYLES.flex(1), STYLES.AICenter, STYLES.JCCenter]}
      colors={[
        'purple',
        COMMON_COLORS.gradientBlue,
        COMMON_COLORS.gradientPurple,
      ]}>
      <View style={[STYLES.AICenter, STYLES.width('70%')]}>
        <AppLogo
          source={IMAGES.Car4}
          resizeMode={'contain'}
          height={250}
          width={'100%'}
        />
        <Space mT={30} />
        <AppText
          title={LABELS.title}
          color={'white'}
          variant={'h2'}
          extraStyle = {[STYLES.fontSize(28)]}
          fontFamily={Fonts.pacificoRegular}
          textAlign={'center'}
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
