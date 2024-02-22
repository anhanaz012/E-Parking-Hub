import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import CountdownTimer from '../../../../components/CountdownTimer/CountdownTimer';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import {Toast} from '../../../../utils/native';
import ModalBox from '../../../../components/ModalBox/ModalBox';
const FeeCalculationScreen = ({navigation}) => {
  const theme = 'light';
  const [address, setAddress] = useState('');
  const timeDifferInSeconds = useSelector(state => state.booking.parkingTimer);
  const [seconds, setSeconds] = useState(timeDifferInSeconds);
  const timerData = useSelector(state => state.booking.selectedArea);
  const [isLoading, setIsLoading] = useState(false);
  const {userToken, vendorToken, bookingId} = timerData;
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
  const parkingCompletionHandler = async () => {
    try {
      setIsLoading(true);
      const spotsData = await firestore()
        .collection('ParkingAreas')
        .doc(vendorToken)
        .get();
      const spots = spotsData.data().spots;
      const selectedSpot = spots.find(
        spot => spot.slotId === timerData.slotDetails.slotId,
      );
      selectedSpot.status = 'available';
      const updatedSpots = spots.map(spot => {
        if (spot.slotId === selectedSpot.slotId) {
          return selectedSpot;
        }
        return spot;
      });
      firestore().collection(`user${userToken}Bookings`).doc(bookingId).update({
        isCompleted: true,
      });
      firestore()
        .collection(`vendor${vendorToken}Bookings`)
        .doc(bookingId)
        .update({
          isCompleted: true,
        })
        .then(async () => {
          await firestore().collection('ParkingAreas').doc(vendorToken).update({
            spots: updatedSpots,
          });
          await firestore().collection('Vendors').doc(vendorToken).update({
            spots: updatedSpots,
          });
          setIsLoading(false);
          setSeconds(0);
          navigation.navigate('HomeStack', {screen: 'AddFeedbackScreen'});
        })
        .catch(err => {
          setIsLoading(false);
          Toast('error',err.message);
        });
    } catch (err) {
      setIsLoading(false);
      Toast('Something wrong');
    }
  };
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
      {isLoading ? <ModalBox isVisible={isLoading} /> : <></>}
      <Space mT={80} />
      <CountdownTimer
        durationInSeconds={seconds}
        onTimerEnd={parkingCompletionHandler}
      />
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
            onPress={parkingCompletionHandler}
          />
        </View>
        <Space mT={80} />
      </View>
    </>
  );
};

export default FeeCalculationScreen;
