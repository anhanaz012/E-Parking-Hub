import React, {useRef} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-number-input';
import {SVG} from '../../../assets/svg';
import {
  COLORS,
  COMMON_COLORS,
  Fonts,
  HORIZON_MARGIN,
  STYLES,
} from '../../../assets/theme';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import AppText from '../../../components/AppText/AppText';
import AppButton from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import Space from '../../../components/Space/Space';
import {LABELS} from '../../../labels';
import {styles} from './styles';
const SignUpScreen = ({navigation}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const theme = 'dark';
  const style = styles(theme);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handlePhoneValidation = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    console.log(isValid);
  };
  const handlePhoneInput = value => {
    setPhoneNumber(value);
  };
  const phoneInput = useRef(null);

  return (
    <>
      <ScrollView
        style={[STYLES.bgColor(COLORS[theme].background), STYLES.flex1]}>
        <AppHeader
          theme={theme}
          iconLeft={
            <SVG.leftArrow height={25} width={25} fill={COLORS[theme].text} />
          }
          onLeftIconPress={() => {
            navigation.goBack();
          }}
        />
        <View style={[STYLES.pH(HORIZON_MARGIN)]}>
          <AppText
            title={LABELS.CreateAccount}
            variant={'h1'}
            fontFamily={Fonts.merriWeatherSansRegular}
            color={COLORS[theme].text}
          />
          <AppText
            title={LABELS.account}
            variant={'h1'}
            color={COMMON_COLORS.secondary}
          />
          <Space mT={15} />
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.firstName}
            onBlur={handleBlur}
            isFocused={isFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.user
                height={20}
                width={20}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={15} />
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.lastName}
            onBlur={handleBlur}
            isFocused={isFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.user
                height={20}
                width={20}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={15} />
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.email}
            onBlur={handleBlur}
            isFocused={isFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.envelope
                height={20}
                width={20}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={15} />
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.password}
            onBlur={handleBlur}
            isFocused={isFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.lock
                height={20}
                width={20}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            iconRight={
              <SVG.eyeClose
                height={15}
                width={15}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            onRightIconPress={() => {
              console.log('right icon pressed');
            }}
          />
          <Space mT={15} />
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.confirmPass}
            onBlur={handleBlur}
            isFocused={isFocused}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.lock
                height={20}
                width={20}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            iconRight={
              <SVG.eyeClose
                height={15}
                width={15}
                fill={isFocused ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            onRightIconPress={() => {
              console.log('right icon pressed');
            }}
          />
          <Space mT={10} />
          <PhoneInput
            placeholder={LABELS.phonePlaceholder}
            ref={phoneInput}
            withShadow={false}
            onChangeText={handlePhoneInput}
            textContainerStyle={style.textContainerStyle}
            containerStyle={style.containerStyle}
            codeTextStyle={style.codeTextStyle}
            textInputStyle={style.textInputStyle}
            textInputProps={{
              placeholderTextColor: COLORS[theme].placeholderTextColor,
            }}
            renderDropdownImage={
              <Icon
                SVGIcon={
                  <SVG.downArrow
                    fill={COLORS[theme].text}
                    height={10}
                    width={10}
                  />
                }
              />
            }
          />
          <Space mT={20} />
          <AppButton title={LABELS.signup} onPress={handlePhoneValidation} />
          <Space mT={20} />
          <View style={[STYLES.rowCenter, STYLES.alignSelf('center')]}>
            <AppText
              title={LABELS.haveAccount}
              color={COLORS[theme].text}
              fontFamily={Fonts.latoRegular}
            />
            <Space mL={10} />
            <AppText
              title={LABELS.signin}
              color={COMMON_COLORS.secondary}
              fontFamily={Fonts.latoRegular}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
