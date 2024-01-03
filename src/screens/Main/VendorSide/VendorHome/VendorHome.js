import React from 'react';
import { ScrollView, View } from 'react-native';
import { IMAGES } from '../../../../assets/images';
import { SVG } from '../../../../assets/svg';
import { COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const VendorHome = () => {
  const theme = 'light';
  const style = styles;
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
        <AppLogo
          source={IMAGES.imageHome}
          height={120}
          width={'100%'}
          resizeMode={'cover'}
        />
        <View style={style.bookingsContainer}>
          <Space mT={10} />
          <View
            style={[STYLES.height(60), STYLES.rowCenterBt, STYLES.AICenter]}>
            <AppText
              title={LABELS.allBookings}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'h4'}
            />
            <AppText
              title={`10 ${LABELS.requests}`}
              fontFamily={Fonts.latoRegular}
              variant={'body2'}
              color={COLORS.light.primary}
            />
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
                  btnContainer: style.declineBtn,
                }}
              />
              <AppButton
                title={LABELS.accept}
                textColor={COLORS.light.primary}
                extraStyle={{
                  btnContainer: style.acceptBtn,
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
