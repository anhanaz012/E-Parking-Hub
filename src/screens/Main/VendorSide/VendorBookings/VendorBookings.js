import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import Icon from '../../../../components/Icon/Icon';

const VendorBookings = () => {
  const theme = 'light';
  const [selected, setSelected] = useState('Accepted');
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
            title={LABELS.accepted}
            textColor={selected === 'Accepted' ? 'white' : 'black'}
            textVariant="h5"
            extraStyle={{
              btnContainer:
                selected === 'Accepted'
                  ? style.selectedBtn
                  : style.unSelectedBtn,
            }}
            onPress={() => setSelected('Accepted')}
          />
          <AppButton
            title={LABELS.rejected}
            textColor={selected === 'Rejected' ? 'white' : 'black'}
            extraStyle={{
              btnContainer:
                selected === 'Rejected'
                  ? style.selectedBtn
                  : style.unSelectedBtn,
            }}
            textVariant="h5"
            onPress={() => setSelected('Rejected')}
          />
        </View>
        <Space mT={20} />
        {selected === 'Accepted' ? (
          <>
            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Henry Horrid'}
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
                    title={'Amount : $40.00'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.clock height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Time: 10:00am'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body2'}
                  />
                </View>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.calender height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Date: 10 Dec 2023'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
            </View>

            <Space mT={20} />

            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Henry Horrid'}
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
                    title={'Amount : $40.00'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.clock height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Time: 10:00am'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body1'}
                  />
                </View>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.calender height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Date: 10 Dec 2023'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body1'}
                  />
                </View>
              </View>
            </View>
            <Space mT={20} />
            <View style={style.activeBookingCard}>
              <View style={style.activeCardContent}>
                <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Henry Horrid'}
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
                    title={'Amount : $40.00'}
                    color={COLORS.dark.primary}
                    fontFamily={Fonts.merriWeatherSansRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT={8} />
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.clock height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Time: 10:00am'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body1'}
                  />
                </View>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.calender height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Date: 10 Dec 2023'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body1'}
                  />
                </View>
              </View>
            </View>
            <Space mT={20} />
          </>
        ) : (
          <>
            <View style={style.completedBookingCard}>
              <View style={style.completedCardContent}>
                <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                  <AppText
                    title={'Henry Horrid'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                  <Space mT={5} />
                  <AppText
                    title={'North Nazimabad,Karachi'}
                    color={'grey'}
                    fontFamily={Fonts.mavenRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
              <Space mT = {5}/>
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.clock height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Time: 10:00am'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body2'}
                  />
                </View>
                <View style={[STYLES.row]}>
                  <Icon
                    SVGIcon={
                      <SVG.calender height={15} width={15} fill={'black'} />
                    }
                  />
                  <Space mL={5} />
                  <AppText
                    title={'Date: 10 Dec 2023'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body2'}
                  />
                </View>
              </View>
            </View>
            <Space mT={20} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default VendorBookings;
