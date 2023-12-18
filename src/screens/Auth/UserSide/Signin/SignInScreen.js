import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SVG } from '../../../../assets/svg';
import { COLORS, COMMON_COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { ERRORS } from '../../../../labels/error';
import { LoginHandler } from '../../../../services/firebase';
import { Toast } from '../../../../utils/native';
import { isValidatedLogin } from '../../../../utils/validation';
const SignInScreen = ({navigation}) => {
  const initialInputStates = {
    email: false,
    password: false,
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isFocused, setIsFocused] = useState(initialInputStates);
  const [formValues, setFormValues] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const theme = 'light';
  const handleFocus = initialValue => {
    setIsFocused({...isFocused, [initialValue]: true});
  };
  const handleBlur = initialValue => {
    setIsFocused({...isFocused, [initialValue]: false});
  };
  const handleSigIn = async () => { 
    const {email, password} = formValues;
    // navigation.navigate('BottomNavigation');
    if (!email && !password) {
      Toast(ERRORS.emptyForm);
    } else if (isValidatedLogin({email, password})) {
      setIsLoading(true);
      const message = await LoginHandler({email, password});
      if (message) {
        setIsLoading(false);
        Toast(message);
      } else {
        setIsLoading(false);
        Toast(LABELS.loginSuccess);
        navigation.navigate('BottomNavigation');
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
        <View style={[STYLES.pH(20)]}>
          <AppText
            title={LABELS.loginAccount}
            variant={'h1'}
            fontFamily={Fonts.merriWeatherSansRegular}
            color={COLORS[theme].text}
          />
          <AppText
            title={LABELS.account}
            variant={'h1'}
            color={COMMON_COLORS.secondary}
          />

          <Space mT={50} />

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
            onChangeText={text => {
              setFormValues({...formValues, email: text});
            }}
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
            onChangeText={text => {
              setFormValues({...formValues, password: text});
            }}
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
            secureTextEntry={secureTextEntry}
            onRightIconPress={() => {
              setSecureTextEntry(!secureTextEntry);
            }}
          />
          <Space mT={15} />

          <View style={[STYLES.rowCenterBt]}>
            <View style={[STYLES.rowCenter]}>
              <Checkbox
                isChecked={isChecked}
                size={18}
                onPress={() => {
                  setIsChecked(!isChecked);
                }}
              />
              <Space mL={10} />
              <AppText
                title={LABELS.rememberMe}
                extraStyle={[STYLES.fontSize(13)]}
                fontFamily={Fonts.mavenRegular}
                color={COLORS[theme].text}
              />
            </View>
            <View>
              <AppText
                title={LABELS.forgotPassword}
                extraStyle={[STYLES.fontSize(14)]}
                fontFamily={Fonts.mavenRegular}
                color={COMMON_COLORS.secondary}
                onPress={() => {
                  navigation.navigate('ForgotPassScreen');
                }}
              />
            </View>
          </View>
          <Space mT={40} />
          <GradientButton
            title={LABELS.signin}
            onPress={handleSigIn}
            textColor={'white'}
            textVariant={'h5'}
            fontFamily={Fonts.mavenRegular}
          />
          <Space mT={30} />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 0.5,
                width: '30%',
                backgroundColor: 'lightgrey',
              }}></View>
            <AppText
              title={LABELS.contiueWith}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
              color={COLORS[theme].text}
            />
            <View
              style={{
                height: 0.5,
                width: '30%',
                backgroundColor: 'lightgrey',
              }}></View>
          </View>
          <Space mT={30} />
          <View style={[STYLES.rowCenterBt]}>
            <AppButton
              title={'Google'}
              textColor={COLORS[theme].text}
              textVariant="body1"
              iconLeft={<SVG.google height={20} width={20} />}
              mL={10}
              extraStyle={{
                btnContainer: {
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'transparent',
                  width: '48%',
                  elevation: 0,
                },
              }}
            />
            <AppButton
              title={'Facebook'}
              textColor={COLORS[theme].text}
              textVariant="body1"
              iconLeft={<SVG.facebook height={20} width={20} />}
              mL={10}
              extraStyle={{
                btnContainer: {
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  backgroundColor: 'transparent',
                  width: '48%',
                  elevation: 0,
                },
              }}
            />
          </View>

          <Space mT={75} />
          <View style={[STYLES.rowCenter, STYLES.alignSelf('center')]}>
            <AppText
              title={LABELS.haveAccount}
              color={COLORS[theme].text}
              fontFamily={Fonts.latoRegular}
            />
            <Space mL={10} />

            <AppText
              title={LABELS.signup}
              color={COMMON_COLORS.secondary}
              fontFamily={Fonts.latoRegular}
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}
            />
          </View>
          <Space mT={25} />
        </View>
      </ScrollView>
    </>
  );
};

export default SignInScreen;
