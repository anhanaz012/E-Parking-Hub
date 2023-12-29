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
import {Toast} from '../../../../utils/native';
import {ERRORS} from '../../../../labels/error';
import {forgetPassHandler} from '../../../../services/firebase';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import {emailValidator} from '../../../../utils/validation';
const VendorForgotPass = ({navigation}) => {
  const [isInputFocused, setisInputFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = 'light';
  const handleEmailBlur = () => {
    setisInputFocused(false);
  };
  const handleEmailFocus = () => {
    setisInputFocused(true);
  };
  const OTPNavigationHandler = async () => {
    if (!email) {
      Toast(ERRORS.requiredEmail);
    } else {
      if (emailValidator(email)) {
        setIsLoading(true);
        const message = await forgetPassHandler(email);
        if (message) {
          setIsLoading(false);
          Toast(message);
        } else {
          setIsLoading(false);
          Toast(LABELS.emailSent);
        }
      }
    }
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
        {isLoading && <ModalBox isVisible={isLoading} />}
        <Space mT={20} />
        <View style={[STYLES.pH(HORIZON_MARGIN)]}>
          <Space mT={50} />
          <AppLogo
            source={IMAGES.Car2}
            resizeMode={'contain'}
            height={200}
            width={'70%'}
          />
          <Space mT={50} />
          <AppText
            title={LABELS.forgotPassDetails}
            fontFamily={Fonts.latoRegular}
            color={COMMON_COLORS.black}
            variant={'h4'}
            textAlign={'center'}
          />
          <Space mT={50} />
          <AppInput
            onFocus={handleEmailFocus}
            placeholder={LABELS.enterEmail}
            onBlur={handleEmailBlur}
            isFocused={isInputFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.envelope
                height={20}
                width={20}
                fill={isInputFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            onChangeText={text => {
              setEmail(text);
            }}
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

export default VendorForgotPass;
