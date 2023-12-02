import React from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import {styles} from './styles';
import {LABELS} from '../../../../labels';

const NotificationScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
  return (
    <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
      <AppHeader
        theme={'light'}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.notification}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <AppText
          title={'Today'}
          theme={theme}
          variant={'h4'}
          fontFamily={Fonts.merriWeatherSansRegular}
        />
        <Space mT={20} />

        <View style={style.cardContainer}>
          <AppLogo
            source={IMAGES.lock}
            height={60}
            width={60}
            resizeMode={'contain'}
          />
          <View style={style.contentContainer}>
            <AppText
              title={LABELS.paymentSuccessful}
              theme={theme}
              variant={'h5'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
            <Space mT={5} />
            <AppText
              title={LABELS.paymentSuccessMsg}
              theme={theme}
              variant={'body2'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
        </View>

        <Space mT={20} />
        <AppText
          title={'Yesterday'}
          theme={theme}
          variant={'h4'}
          fontFamily={Fonts.merriWeatherSansRegular}
        />
        <Space mT={20} />
        <View style={style.cardContainer}>
          <AppLogo
            source={IMAGES.cancel}
            height={60}
            width={60}
            resizeMode={'contain'}
          />
          <View style={style.contentContainer}>
            <AppText
              title={LABELS.paymentSuccessful}
              theme={theme}
              variant={'h5'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
            <Space mT={5} />
            <AppText
              title={LABELS.paymentSuccessMsg}
              theme={theme}
              variant={'body2'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
        </View>
        <Space mT={20} />
        <AppText
          title={'November 11, 2023'}
          theme={theme}
          variant={'h4'}
          fontFamily={Fonts.merriWeatherSansRegular}
        />
        <Space mT={20} />
        <View style={style.cardContainer}>
          <AppLogo
            source={IMAGES.lock}
            height={60}
            width={60}
            resizeMode={'contain'}
          />
          <View style={style.contentContainer}>
            <AppText
              title={LABELS.paymentSuccessful}
              theme={theme}
              variant={'h5'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
            <Space mT={5} />
            <AppText
              title={LABELS.paymentSuccessMsg}
              theme={theme}
              variant={'body2'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
        </View>
        <Space mT={20} />
        <View style={style.cardContainer}>
          <AppLogo
            source={IMAGES.lock}
            height={60}
            width={60}
            resizeMode={'contain'}
          />
          <View style={style.contentContainer}>
            <AppText
              title={LABELS.paymentSuccessful}
              theme={theme}
              variant={'h5'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
            <Space mT={5} />
            <AppText
              title={LABELS.paymentSuccessMsg}
              theme={theme}
              variant={'body2'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
        </View>
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;
