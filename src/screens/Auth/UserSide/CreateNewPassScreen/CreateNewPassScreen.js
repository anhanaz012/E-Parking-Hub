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
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';

const CreateNewPassScreen = ({navigation}) => {
  const initialInputStates = {
    newPassword: false,
    confirmPassword: false,
  };
  const [isFocused, setIsFocused] = useState(initialInputStates);
  const handleFocus = initialValue => {
    setIsFocused({...isFocused, [initialValue]: true});
  };
  const handleBlur = initialValue => {
    setIsFocused({...isFocused, [initialValue]: false});
  };
  const theme = 'light';
  return (
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
        title={LABELS.createNewPass}
        extraStyle={{container: {backgroundColor: 'white'}}}
      />
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <Space mT={50} />
        <AppLogo
          source={IMAGES.parking1}
          resizeMode={'contain'}
          height={250}
          width={'100%'}
        />
        <Space mT={20} />
        <AppText
          theme={theme}
          title={LABELS.createYourNewPass}
          fontFamily={Fonts.mavenRegular}
          variant={'h4'}
          textAlign={'center'}
          color={COLORS[theme].placeholderTextColor}
        />
        <Space mT={50} />
        <AppInput
          onFocus={() => {
            handleFocus('newPassword');
          }}
          placeholder={LABELS.newPass}
          onBlur={() => {
            handleBlur('newPassword');
          }}
          isFocused={isFocused.newPassword}
          theme={theme}
          mL={10}
          iconLeft={
            <SVG.lock
              height={20}
              width={20}
              fill={isFocused.newPassword ? COLORS[theme].inputBorder : 'gray'}
            />
          }
          iconRight={
            <SVG.eyeClose
              height={15}
              width={15}
              fill={isFocused.newPassword ? COLORS[theme].inputBorder : 'gray'}
            />
          }
          onRightIconPress={() => {
            console.log('right icon pressed');
          }}
        />
        <Space mT={20} />
        <AppInput
          onFocus={() => {
            handleFocus('confirmPassword');
          }}
          placeholder={LABELS.confirmPass}
          onBlur={() => {
            handleBlur('confirmPassword');
          }}
          isFocused={isFocused.confirmPassword}
          theme={theme}
          mL={10}
          iconLeft={
            <SVG.lock
              height={20}
              width={20}
              fill={
                isFocused.confirmPassword ? COLORS[theme].inputBorder : 'gray'
              }
            />
          }
          iconRight={
            <SVG.eyeClose
              height={15}
              width={15}
              fill={
                isFocused.confirmPassword ? COLORS[theme].inputBorder : 'gray'
              }
            />
          }
          onRightIconPress={() => {
            console.log('right icon pressed');
          }}
        />
        <Space mT={20} />
        <GradientButton
          title={LABELS.save}
          textColor={COMMON_COLORS.white}
          textVariant={'h4'}
          onPress={() => {
            navigation.navigate('BottomNavigation');
          }}
        />
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default CreateNewPassScreen;
