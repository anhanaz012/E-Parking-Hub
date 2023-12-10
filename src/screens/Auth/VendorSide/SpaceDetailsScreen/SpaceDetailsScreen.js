import React from 'react';
import { ScrollView, View } from 'react-native';
import { SVG } from '../../../../assets/svg';
import { COLORS, COMMON_COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';
const SpaceDetailsScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
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
              title={LABELS.addSpace}
              variant={'h1'}
              fontFamily={Fonts.merriWeatherSansRegular}
              color={COLORS[theme].text}
            />
            <AppText
              title={LABELS.details}
              variant={'h1'}
              color={COMMON_COLORS.secondary}
            />
          </View>
          <Space mT={40} />

          <AppInput placeholder={LABELS.spaceName} theme={theme} />
          <Space mT={20} />
          <AppInput placeholder={'Address'} theme={theme} mL={10} />

          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfRows}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfLots}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.latitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.longitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <GradientButton
            title={LABELS.signup}
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

export default SpaceDetailsScreen;
