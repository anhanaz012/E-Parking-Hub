import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SVG } from '../../../assets/svg';
import {
  COLORS,
  COMMON_COLORS,
  Fonts,
  STYLES
} from '../../../assets/theme';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import AppText from '../../../components/AppText/AppText';
import AppButton from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Space from '../../../components/Space/Space';
import { LABELS } from '../../../labels';
const SignInScreen = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const theme = 'dark';
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleSigIn = () => {
    navigation.goBack();
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
          <Space mT={20} />
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
          <AppButton
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
        </View>
      </ScrollView>
    </>
  );
};

export default SignInScreen;
