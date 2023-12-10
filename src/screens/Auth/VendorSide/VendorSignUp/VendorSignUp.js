import React, {useRef} from 'react';
import {ScrollView, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {SVG} from '../../../../assets/svg';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import CheckboxText from '../../../../components/CheckboxText/Checkbox';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
const VendorSignUp = ({navigation}) => {
  const initialInputStates = {
    fullName: false,
    email: false,
    phone: false,
    password: false,
  };
  const [isFocused, setIsFocused] = React.useState(initialInputStates);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
  const theme = 'light';
  const style = styles(theme);

  const handleFocus = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: true}));
    console.log(isFocused);
  };

  const handleBlur = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: false}));
  };
  const handlePhoneValidation = () => {
    const isValid = phoneInput.current?.isValidNumber(phoneNumber);
    console.log(isValid);
    navigation.navigate('SpaceDetailsScreen');
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
        <Space mT={10} />
        <View style={[STYLES.pH(20)]}>
          <View style={[STYLES.height('15%')]}>
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
          </View>
          <Space mT={40} />

          <AppInput
            onFocus={() => {
              handleFocus('fullName');
            }}
            placeholder={LABELS.FullName}
            onBlur={() => {
              handleBlur('fullName');
            }}
            isFocused={isFocused.fullName}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.user
                height={20}
                width={20}
                fill={isFocused.fullName ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={20} />
          <AppInput
            onFocus={() => {
              handleFocus('email');
            }}
            placeholder={LABELS.email}
            onBlur={() => {
              handleBlur('email');
            }}
            isFocused={isFocused.email}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.envelope
                height={20}
                width={20}
                fill={isFocused.email ? COLORS[theme].inputBorder : 'gray'}
              />
            }
          />
          <Space mT={20} />
          <AppInput
            onFocus={() => {
              handleFocus('password');
            }}
            placeholder={LABELS.password}
            onBlur={() => {
              handleBlur('password');
            }}
            isFocused={isFocused.password}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.lock
                height={20}
                width={20}
                fill={isFocused.password ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            iconRight={
              <SVG.eyeClose
                height={15}
                width={15}
                fill={isFocused.password ? COLORS[theme].inputBorder : 'gray'}
              />
            }
            onRightIconPress={() => {
              console.log('right icon pressed');
            }}
          />
          <Space mT={20} />

          <PhoneInput
            placeholder={LABELS.phonePlaceholder}
            ref={phoneInput}
            withShadow={false}
            onChangeText={handlePhoneInput}
            textContainerStyle={style.textContainerStyle}
            containerStyle={style.containerStyle}
            codeTextStyle={style.codeTextStyle}
            textInputStyle={style.textInputStyle}
            flagButtonStyle={{display: 'none'}}
            defaultCode="PK"
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
          <View style={[STYLES.rowCenter]}>
            <Checkbox
              size={18}
              color={COMMON_COLORS.secondary}
              isChecked={isChecked}
              onPress={() => {
                setIsChecked(!isChecked);
              }}
            />
            <Space mL={10} />

            <CheckboxText
              theme={theme}
              onPressPrivacy={() => {
                console.log('privacy link');
              }}
              onPressTerms={() => {
                console.log('terms link');
              }}
            />
          </View>
          <Space mT={45} />
          <GradientButton
            title={LABELS.signup}
            onPress={handlePhoneValidation}
            textColor={'white'}
            textVariant={'h5'}
            fontFamily={Fonts.mavenRegular}
          />
          <Space mT={25} />
          <View style={[STYLES.rowCenter, STYLES.alignSelf('center')]}>
            <AppText
              title={LABELS.dontHaveAccount}
              color={COLORS[theme].text}
              fontFamily={Fonts.latoRegular}
            />
            <Space mL={10} />

            <AppText
              title={LABELS.signin}
              color={COMMON_COLORS.secondary}
              fontFamily={Fonts.latoRegular}
              onPress={() => {
                navigation.navigate('VendorSignIn');
              }}
            />
          </View>
        </View>
        <Space mT={25} />
      </ScrollView>
    </>
  );
};

export default VendorSignUp;
