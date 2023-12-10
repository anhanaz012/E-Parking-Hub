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
import AppLogo from '../../../../components/AppLogo/AppLogo';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import OTPInput from '../../../../components/OTPInput/OTPInput';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import AppText from '../../../../components/AppText/AppText';
const VendorOTP = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const theme = 'light';
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };
  const OTPNavigationHandler = () => {
    navigation.navigate('VendorChangePass');
  };
  const handleInputChange = (index, text) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = text;
    setOtp(updatedOTP);
  };
  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    if (enteredOTP.length > 3) {
      navigation.navigate('');
    } else if (enteredOTP.length == 0) {
      Toast('Please enter OTP');
    } else {
      Toast('Incorrect OTP');
    }
  };
  const resendCodeHandler = () => {};

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
          title={LABELS.verifyEmail}
          extraStyle={{container: {backgroundColor: 'white'}}}
        />
        <Space mT={20} />
        <View style={[STYLES.pH(HORIZON_MARGIN)]}>
          <Space mT={20} />
          <AppLogo
            source={IMAGES.Car}
            resizeMode={'contain'}
            height={200}
            width={'80%'}
          />
          <Space mT={50} />
          <OTPInput length={4} onChangeText={handleInputChange} value={otp} />
          <Space mT={40} />

          <Space mT={10} />
          <View style={[STYLES.rowCenter, {alignSelf: 'center'}]}>
            <AppText
              title={LABELS.resendCodein}
              fontFamily={Fonts.latoRegular}
              variant={'body1'}
              alignSelf={'center'}
            />
            <Space mT={20} />
            <Space mL={5} />
            <AppText
              title={'01:00'}
              fontFamily={Fonts.mavenRegular}
              variant={'h4'}
              color={COMMON_COLORS.secondary}
              alignSelf={'center'}
            />
          </View>
          <Space mT={20} />

          <Space mT={50} />
          <GradientButton
            title={LABELS.verify}
            textColor={COMMON_COLORS.white}
            textVariant={'h4'}
            onPress={OTPNavigationHandler}
          />
          <Space mT={20} />
          <AppText
            title={LABELS.resendCode}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
            color={COMMON_COLORS.secondary}
            alignSelf={'center'}
            onPress={resendCodeHandler}
            extraStyle={[STYLES.textDecorationLine('underline')]}
          />
          <Space mT = {20}/>
        </View>
      </ScrollView>
    </>
  );
};

export default VendorOTP;
