import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import BackgroundTimer from 'react-native-background-timer';
import firestore from '@react-native-firebase/firestore';
import {LABELS} from '../../../../labels';
import {styles} from './styles';

const FeeCalculationScreen = ({navigation}) => {
  const theme = 'light';
  const [address, setAddress] = useState('');
  const timerData = useSelector(state => state.booking.selectedArea);
  const duration = timerData.duration;
  const [timeLeft, setTimeLeft] = useState(duration);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [hours, setHours] = useState(parseInt(duration));
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const getSpaceDetails = async () => {
      if (timerData) {
        const vendorToken = timerData.vendorToken;
        const user = await firestore()
          .collection('Vendors')
          .doc(vendorToken)
          .get();
        if (user.exists) setAddress(user.data().formValues.address);
        if (!user.exists) return console.log('No such user!');
      }
    };
    getSpaceDetails();
  }, []);

  const style = styles;
  return (
    <>
      <AppHeader
        theme={theme}
        title={LABELS.parkingTimer}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        mL={15}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <Space mT={80} />
      <View style={[STYLES.row, STYLES.JCEvenly, STYLES.pH(HORIZON_MARGIN)]}>
        <View>
          <View style={[STYLES.row]}>
            <AppText title={'01'} variant={'h1'} />
            <Space mL={20} />
            <AppText title={':'} variant={'h1'} />
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
            <Space mL={20} />
            <AppText title={':'} variant={'h1'} />
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
          <View
            style={[STYLES.rowCenterBt, STYLES.height(25), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.parkingArea}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={timerData.areaName}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
          </View>
          <Space mT={10} />
          <View
            style={[STYLES.rowCenterBt, STYLES.height(30), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.address}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={address}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
                numberOfLines={2}
              />
            </View>
          </View>
          <Space mT={10} />
          <View
            style={[STYLES.rowCenterBt, STYLES.height(25), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.slotID}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={timerData.slotDetails.slotId}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
          </View>
          <Space mT={10} />
          <View
            style={[STYLES.rowCenterBt, STYLES.height(25), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.Duration}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={timerData.duration}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
          </View>
          <Space mT={10} />
          <View
            style={[STYLES.rowCenterBt, STYLES.height(25), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.price}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={`Rs. ${timerData.price}/-`}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
          </View>
          <Space mT={10} />
          <View
            style={[STYLES.rowCenterBt, STYLES.height(25), STYLES.AICenter]}>
            <View style={[STYLES.width('30%')]}>
              <AppText
                title={LABELS.slotName}
                theme={theme}
                variant={'body1'}
                color={'black'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
            <View style={[STYLES.width('70%'), {maxWidth: '50%'}]}>
              <AppText
                title={timerData.slotDetails.slotName}
                theme={theme}
                variant={'body2'}
                fontFamily={Fonts.latoRegular}
              />
            </View>
          </View>
          <Space mT={10} />
          <Space mT={10} />
          <GradientButton
            title={LABELS.endParking}
            textColor={'white'}
            textVariant={'h5'}
            onPress={() => {
              navigation.navigate('HomeStack', {screen: 'AddFeedbackScreen'});
            }}
          />
        </View>
        <Space mT={80} />
      </View>
    </>
  );
};

export default FeeCalculationScreen;
