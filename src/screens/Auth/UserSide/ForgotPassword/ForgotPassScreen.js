import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {
  COLORS,
  COMMON_COLORS,
  Fonts,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
const ForgotPassScreen = ({navigation}) => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const theme = 'light';
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };
  const OTPNavigationHandler = () => {
    navigation.navigate('OTPScreen');
  };
  const style = styles;
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
        <AppHeader
          theme={theme}
          iconLeft={
            <SVG.leftArrow height={25} width={25} fill={COLORS[theme].text} />
          }
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          mL={15}
          title={LABELS.forgotPassword}
          extraStyle={{container: {backgroundColor: 'white'}}}
        />
        <Space mT={20} />
        <View style={[STYLES.pH(HORIZON_MARGIN)]}>
          <Space mT={50} />
          <AppLogo
            source={IMAGES.Car2}
            resizeMode={'contain'}
            height={250}
            width={'80%'}
          />
          <Space mT={30} />
          <AppText
            title={LABELS.forgotPassDetails}
            fontFamily={Fonts.latoRegular}
            color={COMMON_COLORS.black}
            variant={'h4'}
            textAlign={'center'}
          />
          <Space mT={80} />
          <AppInput
            onFocus={handleEmailFocus}
            placeholder={LABELS.enterEmail}
            onBlur={handleEmailBlur}
            isFocused={isEmailFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.envelope
                height={20}
                width={20}
                fill={isEmailFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={20} />
          <GradientButton
            title={LABELS.continue}
            textColor={COMMON_COLORS.white}
            textVariant={'h4'}
            onPress={OTPNavigationHandler}
          />
          <Space mT={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPassScreen;
