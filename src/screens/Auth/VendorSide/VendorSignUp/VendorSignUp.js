import firestore from '@react-native-firebase/firestore';
import React, {useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import CheckboxText from '../../../../components/CheckboxText/Checkbox';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {RegistrationHandler} from '../../../../services/firebase';
import {Toast} from '../../../../utils/native';
import {isVendorValidated} from '../../../../utils/validation';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const VendorSignUp = ({navigation}) => {
  const initialInputStates = {
    fullName: false,
    email: false,
    phone: false,
    password: false,
  };
  const [isFocused, setIsFocused] = useState(initialInputStates);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const phoneInput = useRef(null);
  const [initialFormValues, setInitialFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    isChecked: isChecked,
  });
  const theme = 'light';
  const style = styles(theme);
  const dispatch = useDispatch();
  const handleFormValues = (inputName, value) => {
    setInitialFormValues(prevState => ({
      ...prevState,
      [inputName]: value,
      isChecked: isChecked,
    }));
  };
  const handleFocus = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: true}));
  };

  const handleBlur = inputName => {
    setIsFocused(prevState => ({...prevState, [inputName]: false}));
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    setInitialFormValues({...initialFormValues, isChecked: !isChecked});
  };
  const handlePhoneValidation = async () => {
    const {fullName, email, password, phone, isChecked} = initialFormValues;
    if (!fullName && !email && !password && !phone && !isChecked) {
      Toast(ERRORS.emptyForm);
    } else if (
      isVendorValidated({fullName, email, password, phone, isChecked})
    ) {
      const isValidPhone = phoneInput.current?.isValidNumber(phone, 'PK');
      if (isValidPhone) {
        setPhoneNumber('+92' + phone);
        setIsLoading(true);
        const message = await RegistrationHandler({email, password});
        if (typeof message === 'string') {
          setIsLoading(false);
          Toast(message);
        } else {
          const uid = message.uid;
          if (uid) {
            const formData = {
              ...initialFormValues,
              image: '',
              role: 'vendor',
              token: uid,
            };
            await firestore().collection('AllUsers').doc(uid).set(formData);
            await firestore().collection('Vendors').doc(uid).set(formData);
            try {
              await AsyncStorage.setItem('vendorLoginToken', uid);
              setIsLoading(false);
              setInitialFormValues({
                fullName: '',
                email: '',
                password: '',
                phone: '',
                isChecked: false,
              });
              Toast(LABELS.successfullyRegistered);
              navigation.navigate('VendorAuthStack', {
                screen: 'SpaceDetailsScreen',
              });
            } catch {
              console.error('error in setting token');
            }
          }
        }
      } else {
        setIsLoading(false);
        Toast(ERRORS.phoneValidation);
      }
    }
  };
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
        {isLoading && <ModalBox isVisible={isLoading} />}
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
            onChangeText={value => {
              handleFormValues('fullName', value);
            }}
            value={initialFormValues.fullName}
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
            value={initialFormValues.email}
            placeholder={LABELS.email}
            onBlur={() => {
              handleBlur('email');
            }}
            onChangeText={value => {
              handleFormValues('email', value);
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
            value={initialFormValues.password}
            placeholder={LABELS.password}
            onBlur={() => {
              handleBlur('password');
            }}
            onChangeText={value => {
              handleFormValues('password', value);
            }}
            secureTextEntry={secureTextEntry}
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
          <PhoneInput
            placeholder={LABELS.phonePlaceholder}
            ref={phoneInput}
            withShadow={false}
            textContainerStyle={style.textContainerStyle}
            containerStyle={style.containerStyle}
            codeTextStyle={style.codeTextStyle}
            textInputStyle={style.textInputStyle}
            flagButtonStyle={{display: 'none'}}
            defaultCode="PK"
            textInputProps={{
              placeholderTextColor: COLORS[theme].placeholderTextColor,
            }}
            onChangeText={value => {
              handleFormValues('phone', value);
            }}
            value={initialFormValues.phone}
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
              onPressPrivacy={() => {}}
              onPressTerms={() => {}}
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
