import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {
  COLORS,
  Fonts,
  HEIGHT,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {styles} from './styles';
import {LABELS} from '../../../../labels';
import {setSelectedArea} from '../../../../store/slices/bookingSlice';
const CheckInScreen = ({navigation}) => {
  const style = styles;
  const area = useSelector(state => state.booking.selectedArea);
  const dispatch = useDispatch();
  const displayDirectionHandler = () => {
    dispatch(setSelectedArea(area));
    navigation.navigate('HomeStack', {screen: 'DisplayDirectionsScreen'});
  };
  const feeCaluclationHandler = () => {
    navigation.navigate('HomeStack', {
      screen: 'FeeCalculationScreen',
    });
  };
  return (
    <ScrollView style={[STYLES.flex1]}>
      <View
        style={[
          STYLES.height(HEIGHT * 0.35),
          STYLES.width100,
          STYLES.bgColor(COLORS.dark.glassBlack),
          STYLES.JCCenter,
        ]}>
        <AppHeader
          title={LABELS.parkingCheckIn}
          theme={'dark'}
          iconLeft={<SVG.leftArrow height={20} width={20} fill={'white'} />}
          mL={15}
          onLeftIconPress={() => {
            navigation.goBack();
          }}
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
      <View
        style={[
          STYLES.pH(HORIZON_MARGIN),
          STYLES.height(HEIGHT * 0.5),
          STYLES.JCCenter,
        ]}>
        <View
          style={[
            STYLES.rowCenter,
            STYLES.JCAround,
            STYLES.pH(HORIZON_MARGIN),
          ]}>
          <View style={style.detailsCardContainer}>
            <AppText
              title={area && area.areaName}
              variant={'h3'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
            <AppText
              title={`Duration: ${area.duration}`}
              variant={'body2'}
              fontFamily={Fonts.merriWeatherSansRegular}
              color={'purple'}
            />
            <Space mT={10} />
            <View style={[STYLES.rowCenterBt]}>
              <AppText
                title={`Row no: ${area.slotDetails.row}`}
                color={COLORS.dark.gradientPurple}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
              <AppText
                title={`Col no: ${area.slotDetails.col}`}
                color={COLORS.dark.gradientPurple}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
            <Space mT={20} />
            <View style={[STYLES.rowCenterBt]}>
              <View style={style.areaTimeContainer}>
                <AppText
                  title={`Date: ${area.date}`}
                  color={COLORS.dark.gradientPurple}
                  variant={'body2'}
                  fontFamily={Fonts.latoRegular}
                />
              </View>
              <View style={style.areaTimeContainer}>
                <AppText
                  title={`Time: ${area.time}`}
                  color={COLORS.dark.gradientPurple}
                  variant={'body2'}
                  fontFamily={Fonts.latoRegular}
                />
              </View>
            </View>
          </View>
        </View>
        <Space mT={70} />
        <View style={[STYLES.rowCenterBt]}>
          <AppButton
            title={LABELS.showDirections}
            textColor={'black'}
            extraStyle={{btnContainer: {width: '40%'}}}
            onPress={displayDirectionHandler}
          />
          <GradientButton
            title={LABELS.letsPark}
            textColor={'white'}
            onPress={feeCaluclationHandler}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckInScreen;
