import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SVG} from '../../../assets/svg';
import {COMMON_COLORS, Fonts, STYLES} from '../../../assets/theme';
import AppText from '../../../components/AppText/AppText';
import Icon from '../../../components/Icon/Icon';
import Space from '../../../components/Space/Space';
import {LABELS} from '../../../labels';
import {styles} from './styles';

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
      <View
        style={[
          STYLES.AICenter,
          STYLES.width('70%'),
        ]}>
        <View>
          <Icon
            SVGIcon={<SVG.location fill={'white'} height={45} width={45} />}
          />
          <Icon
            SVGIcon={<SVG.carIcon fill={'white'} height={70} width={70} />}
          />
          <View
            style={{
              height: 15,
              width: 100,
              backgroundColor: 'white',
              borderRadius: 15,
            }}></View>
        </View>
        <Space mT={30} />
        <AppText
          title={LABELS.title}
          color={'white'}
          variant={'h1'}
          fontFamily={Fonts.mavenRegular}
          textAlign={'center'}
        />
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;