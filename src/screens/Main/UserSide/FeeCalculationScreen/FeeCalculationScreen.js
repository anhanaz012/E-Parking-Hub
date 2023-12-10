import React from 'react';
import {View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';

const FeeCalculationScreen = () => {
  const theme = 'light';
  const style = styles;

  return (
    <>
      <AppHeader
        theme={theme}
        title={LABELS.parkingTimer}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        mL={15}
      />
      <Space mT={80} />
      <View style={[STYLES.row, STYLES.JCEvenly, STYLES.pH(HORIZON_MARGIN)]}>
        <View>
          <View style={[STYLES.row]}>
            <AppText title={'01'} variant={'h1'} />
            <AppText title={'  :'} variant={'h1'} />
          </View>
          <AppText
            title={'Hours'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <View>
          <View style={[STYLES.row]}>
            <AppText title={'26'} variant={'h1'} />
            <AppText title={'  :'} variant={'h1'} />
          </View>
          <AppText
            title={'Minutes'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <View>
          <AppText title={'02 '} variant={'h1'} />
          <AppText
            title={'Seconds'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      </View>

      <Space mT={80} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View style={styles.container}>
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.parkingArea}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'Louis Marventen'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.address}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'North Nazimabad, Karachi'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.slotID}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'B12'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.extraCharges}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'5% GST'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.price}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'$ 5/hr'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
          <View style={[STYLES.rowCenterBt]}>
            <AppText
              title={LABELS.total}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <AppText
              title={'$ 20.00'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          <Space mT={10} />
        </View>
        <Space mT={80} />
        <GradientButton
          title={'Proceed to Pay'}
          textColor={'white'}
          textVariant={'h5'}
        />
      </View>
    </>
  );
};

export default FeeCalculationScreen;
