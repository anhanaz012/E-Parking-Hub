import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { IMAGES } from '../../../../assets/images';
import { SVG } from '../../../../assets/svg';
import { COLORS, Fonts, HORIZON_MARGIN, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const MyBookingScreen = () => {
  const theme = 'light';
  const [selected, setSelected] = useState('Upcoming');
  const style = styles;
  return (
    <ScrollView style={[STYLES.flex1]}>
      <AppHeader
        title={'My Bookings'}
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        mL={15}
      />
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View
          style={[
            STYLES.rowCenter,
            STYLES.alignSelf('center'),
            STYLES.bR(6),
            STYLES.bgColor(COLORS.light.steelGrey),
          ]}>
          <AppButton
            title={LABELS.upcoming}
            textColor={selected === 'Upcoming' ? 'white' : 'black'}
            textVariant="h5"
            extraStyle={{
              btnContainer:
                selected === 'Upcoming'
                  ? style.selectedBtn
                  : style.unSelectedBtn,
            }}
            onPress={() => setSelected('Upcoming')}
          />
          <AppButton
            title={LABELS.past}
            textColor={selected === 'Past' ? 'white' : 'black'}
            extraStyle={{
              btnContainer:
                selected === 'Past' ? style.selectedBtn : style.unSelectedBtn,
            }}
            textVariant="h5"
            onPress={() => setSelected('Past')}
          />
        </View>
        <Space mT={20} />
        {selected === 'Upcoming' ? (
          <>
            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <AppLogo
                  source={IMAGES.parkingHome}
                  height={'80%'}
                  width={'30%'}
                  extraStyle={{borderRadius: 10}}
                />
                <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Louis Maventen'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'North Nazimabad,Karachi'}
                    color={'grey'}
                    fontFamily={Fonts.mavenRegular}
                    variant={'body2'}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'$40.00/hr'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <AppButton
                  title={'Active now'}
                  textColor={'grey'}
                  extraStyle={{
                    btnContainer: {
                      width: 80,
                      height: 35,
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: COLORS.light.steelGrey,
                      elevation: 0,
                    },
                  }}
                />
                <GradientButton
                  title={LABELS.View}
                  extraStyle={{btnContainer: {height: 40, width: 100}}}
                  textColor={'white'}
                />
              </View>
            </View>
            <Space mT={20} />
            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <AppLogo
                  source={IMAGES.parkingHome}
                  height={'80%'}
                  width={'30%'}
                  extraStyle={{borderRadius: 10}}
                />
                <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Louis Maventen'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'North Nazimabad,Karachi'}
                    color={'grey'}
                    fontFamily={Fonts.mavenRegular}
                    variant={'body2'}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'$40.00/hr'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <AppButton
                  title={'Booked'}
                  textColor={'grey'}
                  extraStyle={{
                    btnContainer: {
                      width: 80,
                      height: 35,
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: COLORS.light.steelGrey,
                      elevation: 0,
                    },
                  }}
                />
                <GradientButton
                  title={LABELS.View}
                  extraStyle={{btnContainer: {height: 40, width: 100}}}
                  textColor={'white'}
                />
              </View>
            </View>

            <Space mT={20} />

            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <AppLogo
                  source={IMAGES.parkingHome}
                  height={'80%'}
                  width={'30%'}
                  extraStyle={{borderRadius: 10}}
                />
                <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Louis Maventen'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'North Nazimabad,Karachi'}
                    color={'grey'}
                    fontFamily={Fonts.mavenRegular}
                    variant={'body2'}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'$40.00/hr'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <AppButton
                  title={'Upcoming'}
                  textColor={'grey'}
                  extraStyle={{
                    btnContainer: {
                      width: 80,
                      height: 35,
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: COLORS.light.steelGrey,
                      elevation: 0,
                    },
                  }}
                />
                <GradientButton
                  title={LABELS.View}
                  extraStyle={{btnContainer: {height: 40, width: 100}}}
                  textColor={'white'}
                />
              </View>
            </View>
            <Space mT={20} />
          </>
        ) : (
          <>
            <View style={style.completedBookingCard}>
              <AppLogo
                source={IMAGES.parkingHome}
                height={'80%'}
                width={'30%'}
                extraStyle={{borderRadius: 10}}
              />
              <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                <AppText
                  title={'Louis Maventen'}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
                <Space mT={5} />
                <AppText
                  title={'North Nazimabad,Karachi'}
                  color={'grey'}
                  fontFamily={Fonts.mavenRegular}
                  variant={'body2'}
                />
                <Space mT={5} />
                <AppText
                  title={'$20/hr'}
                  color={COLORS.dark.primary}
                  fontFamily={Fonts.merriWeatherSansRegular}
                  variant={'body2'}
                />
              </View>
            </View>
            <Space mT={20} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default MyBookingScreen;
