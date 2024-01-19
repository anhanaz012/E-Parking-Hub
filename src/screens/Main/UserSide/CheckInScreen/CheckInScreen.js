import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import {IMAGES} from '../../../../assets/images';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES, WIDTH} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {SVG} from '../../../../assets/svg';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import {LABELS} from '../../../../labels';
const CheckInScreen = () => {
  const style = styles;
  return (
    <View style={[STYLES.flex1]}>
      <View
        style={[
          STYLES.height('40%'),
          STYLES.width100,
          STYLES.bgColor(COLORS.dark.glassBlack),
          STYLES.JCCenter,
        ]}>
        <AppHeader
          title={'Parking Entry Check in'}
          theme={'dark'}
          iconLeft={<SVG.leftArrow height={20} width={20} fill={'white'} />}
          mL={15}
        />
        <Space mT={20} />

        <AppLogo
          source={IMAGES.carSlot1}
          height={180}
          width={180}
          resizeMode={'contain'}
        />
        <Space mT={20} />
      </View>
      <Space mT={40} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View
          style={[
            STYLES.rowCenter,
            STYLES.JCAround,
            STYLES.pH(HORIZON_MARGIN),
          ]}>
          <View style={[STYLES.width('33%'), STYLES.AICenter]}>
            <AppText title={'Parking'} />
            <Space mT={20} />
            <AppText
              title={'Louis Franklin Building'}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'body2'}
              color={COLORS.dark.primary}
            />
          </View>
          <View style={[STYLES.width('33%'), STYLES.AICenter]}>
            <AppText title={'Slot Id'} />
            <Space mT={20} />
            <AppText
              title={'A-11'}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'body2'}
              color={COLORS.dark.primary}
            />
          </View>
          <View style={[STYLES.width('33%'), STYLES.AICenter]}>
            <AppText title={LABELS.price} />
            <Space mT={20} />
            <AppText
              title={'Rs./20-'}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'body2'}
              color={COLORS.dark.primary}
            />
          </View>
        </View>
        <Space mT={50} />
        <Space mT={'50%'} />
        <GradientButton title={'Lets Park'} textColor={'white'} />
      </View>
    </View>
  );
};

export default CheckInScreen;
