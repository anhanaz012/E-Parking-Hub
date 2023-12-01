import React from 'react';
import { ScrollView, View } from 'react-native';
import { IMAGES } from '../../../../assets/images';
import { COLORS, COMMON_COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const IntroScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
  return (
    <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
      <Space mT={80} />
      <AppLogo
        source={IMAGES.logo}
        resizeMode={'contain'}
        height={200}
        width={'100%'}
      />
      <Space mT={50} />
      <View style={style.contentContainer}>
        <AppText
          title={LABELS.welcomeTo}
          fontFamily={Fonts.merriWeatherSansRegular}
          variant={'h1'}
          color={COLORS[theme].text}
        />
        <AppText
          title={LABELS.title}
          variant={'h1'}
          fontFamily={Fonts.merriWeatherBold}
          color={COMMON_COLORS.secondary}
          extraStyle={[STYLES.fontSize(30)]}
        />
        <Space mB={10} />

        <AppText
          title={LABELS.appIntro}
          fontFamily={Fonts.mavenRegular}
          color={COLORS[theme].text}
        />
        <Space mB={30} />
        <GradientButton
          title={LABELS.user}
          textColor={'white'}
          textVariant={'h5'}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />

        <Space mB={15} />
        <AppButton
          title={LABELS.vendor}
          extraStyle={{btnContainer: STYLES.bgColor(COMMON_COLORS.steelGrey)}}
          textVariant={'h5'}
          textColor={COMMON_COLORS.secondary}
        />
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default IntroScreen;
