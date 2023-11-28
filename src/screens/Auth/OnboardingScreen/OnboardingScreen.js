import React, {useState} from 'react';
import {View} from 'react-native';
import {IMAGES} from '../../../assets/images';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../assets/theme';
import AppLogo from '../../../components/AppLogo/AppLogo';
import AppText from '../../../components/AppText/AppText';
import AppButton from '../../../components/Button/Button';
import Space from '../../../components/Space/Space';
import {LABELS} from '../../../labels';
import {styles} from './styles';
import {userBoardingScreensData} from '../../../data/appData';

const OnboardingScreen = ({navigation}) => {
  const data = userBoardingScreensData;
  const style = styles;
  const theme = 'light';
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextBtnPressHandler = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('SignUpScreen');
    }
  };

  return (
    <View
      style={[
        STYLES.flex1,
        STYLES.pH(20),
        STYLES.bgColor(COLORS[theme].background),
      ]}>
      <View style={[STYLES.height('50%'), STYLES.AICenter, STYLES.JCEnd]}>
        <AppLogo
          source={data[currentIndex] && data[currentIndex].image}
          resizeMode="contain"
          height={200}
          width={'70%'}
        />
      </View>
      <View style={[STYLES.height('50%')]}>
        <AppText
          title={data[currentIndex] && data[currentIndex].heading}
          color={COLORS[theme].text}
          theme={theme}
          extraStyle={[STYLES.textAlign('center'), STYLES.fontSize(26)]}
          fontFamily={Fonts.merriWeatherSansRegular}
        />
        <Space mT={10} />
        <AppText
          title={data[currentIndex] && data[currentIndex].text}
          theme={theme}
          color={COLORS[theme].placeholderTextColor}
          extraStyle={[STYLES.textAlign('center')]}
          fontFamily={Fonts.latoRegular}
          variant={'body1'}
        />
        <Space mT={30} />
        <View style={style.dotsContainer}>
          <View
            style={
              currentIndex === 0 ? style.activeDot : style.inactiveDot
            }></View>
          <Space mL={5} />
          <View
            style={
              currentIndex === 1 ? style.activeDot : style.inactiveDot
            }></View>
          <Space mL={5} />
          <View
            style={
              currentIndex === 2 ? style.activeDot : style.inactiveDot
            }></View>
        </View>
        <Space mT={25} />
        <AppButton
          title={LABELS.next}
          textColor={COMMON_COLORS.white}
          fontFamily={Fonts.merriWeatherSansRegular}
          textVariant={'body1'}
          onPress={nextBtnPressHandler}
        />
        <Space mT={15} />
        <AppButton
          title={LABELS.skip}
          textColor={COMMON_COLORS.secondary}
          fontFamily={Fonts.merriWeatherSansRegular}
          textVariant={'body1'}
          extraStyle={{
            btnContainer: {backgroundColor: COMMON_COLORS.steelGrey},
          }}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;
