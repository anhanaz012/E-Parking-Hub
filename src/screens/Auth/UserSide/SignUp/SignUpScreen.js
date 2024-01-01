import firestore from '@react-native-firebase/firestore';
import React, { useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { SVG } from '../../../../assets/svg';
import { COLORS, COMMON_COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import CheckboxText from '../../../../components/CheckboxText/Checkbox';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { ERRORS } from '../../../../labels/error';
import { RegistrationHandler } from '../../../../services/firebase';
import { Toast } from '../../../../utils/native';
import { isValidatedSignUp } from '../../../../utils/validation';
import { styles } from './styles';

const SignUpScreen = ({navigation}) => {
  const initialInputStates = {
    fullName: false,
    email: false,
    carModel: false,
    phone: false,
    password: false,
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(initialInputStates);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [initialFormValues, setInitialFormValues] = useState({
    fullName: '',
    email: '',
    carModel: '',
    password: '',
    phone: '',
    isChecked: isChecked,
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const theme = 'light';
  const style = styles(theme);
  const phoneInput = useRef(null);
  const handleFocus = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: true}));
  };
  const handleBlur = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: false}));
  };
  const handleFormValues = (inputName, value) => {
    setInitialFormValues(prevState => ({
      ...prevState,
      [inputName]: value,
      isChecked: isChecked,
    }));
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setInitialFormValues({...initialFormValues, isChecked: !isChecked});
  };
  const handlePhoneValidation = async () => {
    const {fullName, email, carModel, password, phone, isChecked} =
      initialFormValues;
    if (!fullName && !email && !carModel && !password && !phone && !isChecked) {
      Toast(ERRORS.emptyForm);
    } else if (
      isValidatedSignUp({fullName, email, password, carModel, phone, isChecked})
    ) {
      const isValidPhone = phoneInput.current?.isValidNumber(phone, 'PK');
      if (isValidPhone) {
        setPhoneNumber('+92' + phone);
        setIsLoading(true);
        const message = await RegistrationHandler({email, password});
        if (message) {
          setIsLoading(false);
          Toast(message);
        } else {
          await firestore()
            .collection('Users')
            .add(initialFormValues)
            .then(() => {
              setInitialFormValues({
                fullName: '',
                email: '',
                password: '',
                phone: '',
                isChecked: false,
              });
              setIsLoading(false);
              Toast(LABELS.successfullyRegistered);
              navigation.navigate('AuthStack', {screen: 'SignInScreen'});
            });
        }
      } else {
        Toast(ERRORS.phoneValidation);
      }
    }
  };

  return (
    <>
      <ScrollView
        style={[STYLES.bgColor(COLORS[theme].background), STYLES.flex1]}>
        {isLoading && <ModalBox isVisible={isLoading} />}
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
          <Space mT={20} />
          <AppInput
            onFocus={() => {
              handleFocus('fullName');
            }}
            placeholder={LABELS.FullName}
            onBlur={() => {
              handleBlur('fullName');
            }}
            onChangeText={value => {
              handleFormValues('fullName', value);
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
            onChangeText={value => {
              handleFormValues('email', value);
            }}
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
            onChangeText={value => {
              handleFormValues('password', value);
            }}
            isFocused={isFocused.password}
            secureTextEntry={secureTextEntry}
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
              secureTextEntry ? (
                <SVG.eyeClose
                  height={18}
                  width={18}
                  fill={isFocused.password ? COLORS[theme].inputBorder : 'gray'}
                />
              ) : (
                <SVG.eyeOpen
                  height={18}
                  width={18}
                  fill={isFocused.password ? COLORS[theme].inputBorder : 'gray'}
                />
              )
            }
            onRightIconPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
          />
          <Space mT={20} />

          <AppInput
            onFocus={() => {
              handleFocus('carModel');
            }}
            placeholder={LABELS.carModel}
            onBlur={() => {
              handleBlur('carModel');
            }}
            isFocused={isFocused.carModel}
            onChangeText={value => {
              handleFormValues('carModel', value);
            }}
            theme={theme}
            mL={10}
            iconLeft={
              <SVG.carModel
                height={20}
                width={20}
                fill={isFocused.carModel ? COLORS[theme].inputBorder : 'gray'}
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
            onChangeText={value => {
              handleFormValues('phone', value);
            }}
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
              onPress={toggleCheckbox}
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
          <Space mT={25} />
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
                navigation.navigate('SignInScreen');
              }}
            />
          </View>
        </View>
        <Space mT={25} />
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
