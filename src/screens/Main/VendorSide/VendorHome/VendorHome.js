import React from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';

const VendorHome = () => {
  const theme = 'light';
  const style = styles;
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
        <AppLogo
          source={IMAGES.header}
          height={250}
          width={'100%'}
          resizeMode={'cover'}
        />

        <View style={style.bookingsContainer}>
          <AppHeader
            title={LABELS.bookingRequests}
            theme={theme}
            fontFamily={Fonts.merriWeatherSansRegular}
          />
          <Space mT={20} />

          <View style={style.bookingCard}>
            <View style={[STYLES.rowCenterBt]}>
              <AppText
                title={'John leo'}
                fontFamily={Fonts.latoRegular}
                variant={'h3'}
              />
              <AppText
                title={'$10/hr'}
                fontFamily={Fonts.latoRegular}
                variant={'h3'}
              />
            </View>
            <Space mT={5} />
            <AppText
              title={'Spot ID : A2'}
              fontFamily={Fonts.mavenRegular}
              variant={'body1'}
            />
            <Space mT={10} />
            <View style={[STYLES.rowCenterBt]}>
              <View style={[STYLES.row]}>
                <Icon
                  SVGIcon={<SVG.clock height={15} width={15} fill={'black'} />}
                />
                <Space mL={5} />
                <AppText
                  title={'Time: 10:00am'}
                  fontFamily={Fonts.mavenRegular}
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
                  fontFamily={Fonts.mavenRegular}
                  variant={'body1'}
                />
              </View>
            </View>
            <Space mT={15} />
            <View style={[STYLES.rowCenter, STYLES.JCEvenly]}>
              <AppButton
                title={LABELS.decline}
                textColor={COLORS.light.red}
                extraStyle={{
                  btnContainer: {
                    width: '40%',
                    backgroundColor: 'transparent',
                    borderColor: COLORS.light.red,
                    elevation: 0,
                    borderWidth: 1,
                    height: 40,
                  },
                }}
              />
              <AppButton
                title={LABELS.accept}
                textColor={COLORS.light.primary}
                extraStyle={{
                  btnContainer: {
                    width: '40%',
                    backgroundColor: 'transparent',
                    borderColor: COLORS.light.primary,
                    elevation: 0,
                    borderWidth: 1,
                    height: 40,
                  },
                }}
              />
            </View>
          </View>

          <Space mT={20} />

          <View style={style.bookingCard}>
            <View style={[STYLES.rowCenterBt]}>
              <AppText
                title={'John leo'}
                fontFamily={Fonts.latoRegular}
                variant={'h3'}
              />
              <AppText
                title={'$10/hr'}
                fontFamily={Fonts.latoRegular}
                variant={'h3'}
              />
            </View>
            <Space mT={5} />
            <AppText
              title={'Spot ID : A2'}
              fontFamily={Fonts.mavenRegular}
              variant={'body1'}
            />
            <Space mT={10} />
            <View style={[STYLES.rowCenterBt]}>
              <View style={[STYLES.row]}>
                <Icon
                  SVGIcon={<SVG.clock height={15} width={15} fill={'black'} />}
                />
                <Space mL={5} />
                <AppText
                  title={'Time: 10:00am'}
                  fontFamily={Fonts.mavenRegular}
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
                  fontFamily={Fonts.mavenRegular}
                  variant={'body1'}
                />
              </View>
            </View>
            <Space mT={15} />
            <View style={[STYLES.rowCenter, STYLES.JCEvenly]}>
              <AppButton
                title={LABELS.decline}
                textColor={COLORS.light.red}
                extraStyle={{
                  btnContainer: {
                    width: '40%',
                    backgroundColor: 'transparent',
                    borderColor: COLORS.light.red,
                    elevation: 0,
                    borderWidth: 1,
                    height: 45,
                  },
                }}
              />
              <AppButton
                title={LABELS.accept}
                textColor={COLORS.light.primary}
                extraStyle={{
                  btnContainer: {
                    width: '40%',
                    backgroundColor: 'transparent',
                    borderColor: COLORS.light.primary,
                    elevation: 0,
                    borderWidth: 1,
                    height: 45,
                  },
                }}
              />
            </View>
          </View>
        </View>
        <Space mT={20} />
      </ScrollView>
    </>
  );
};

export default VendorHome;
