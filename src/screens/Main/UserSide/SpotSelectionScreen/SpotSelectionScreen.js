import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import uuid from 'react-native-uuid';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {ParkingDuration} from '../../../../data/appData';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {Toast} from '../../../../utils/native';
import {styles} from './styles';
const SpotSelectionScreen = ({navigation}) => {
  const theme = 'light';
  const [isLoading, setIsLoading] = useState(false);
  const spotsData = useSelector(state => state.area.parkingAreas);
  const spaceDetails = useSelector(state => state.area.areaDetails);
  const vendorToken = useSelector(state => state.area.vendorToken);
  const userToken = useSelector(state => state.area.userToken);
  const areaImage = useSelector(state => state.area.areaImage);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userName, setUserName] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(LABELS.oneHour);
  const [duration, setDuration] = useState(1);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [dateTimeMode, setDateTimeMode] = useState('date');
  const style = styles(spaceDetails);
  const showDateTimePicker = mode => {
    setDateTimeMode(mode);
    setDateTimePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  };
  const handlePickedValue = value => {
    if (dateTimeMode === 'date') {
      const formattedDate = value.toLocaleDateString();
      setSelectedDate(formattedDate);
    }
    if (dateTimeMode === 'time') {
      const formattedTime = value.toLocaleTimeString();
      setSelectedTime(formattedTime);
    }
    hideDateTimePicker();
  };
  setTimeout(() => {
    const getUserData = async () => {
      const user = await firestore().collection('Users').doc(userToken).get();
      const name = user.data().fullName;
      setUserName(name);
    };
    getUserData();
  }, 1000);
  const bookingConfirmationHandler = async () => {
    const randomId = uuid.v4();
    const bookingDetails = {
      areaName: spaceDetails.spaceName,
      price: spaceDetails.price,
      date: selectedDate,
      time: selectedTime,
      duration: selectedDuration,
      isPaid: false,
      amount: Number(spaceDetails.price) * duration,
      userToken: userToken,
      vendorToken: vendorToken,
      status: 'pending',
      isCompleted: false,
      isStarted: false,
      userName: userName,
      isRejected: false,
      slotDetails: selectedSpot,
      bookingId: randomId,
      image: areaImage,
    };
    if (selectedDate && selectedTime && userToken && vendorToken) {
      setIsLoading(true);
      firestore()
        .collection('ParkingAreas')
        .doc(vendorToken)
        .update({
          count: firestore.FieldValue.increment(1),
        });
      await firestore()
        .collection(`user${userToken}Bookings`)
        .doc(randomId)
        .set(bookingDetails)
        .then(async () => {
          await firestore()
            .collection(`vendor${vendorToken}Bookings`)
            .doc(randomId)
            .set(bookingDetails);
          setSelectedDate(null);
          setSelectedTime(null);
          Toast('Your booking request has been sent');
          setShowConfirmModal(false);
          navigation.goBack();
        });
      setDuration(1);
      setSelectedDuration(LABELS.oneHour);
      setIsLoading(false);
    } else if (!selectedDate) {
      Toast(ERRORS.selectDate);
    } else if (!selectedTime) {
      Toast(ERRORS.selectTime);
    } else {
      setIsLoading(false);
      Toast(ERRORS.somethingWent);
    }
  };
  const generateParkingLayout = () => {
    const parkingLayout = [];
    const {width} = Dimensions.get('window');
    const cols = spaceDetails.noOfColumns;
    const slotWidth = width / cols - 15;
    for (let row = 1; row <= spaceDetails.noOfRows; row++) {
      const rowContainer = [];
      for (let col = 1; col <= spaceDetails.noOfColumns; col++) {
        const slotId = `abc_${row}_${col}`;
        const slotName = `A${row}${col}`;
        const status =
          spotsData.find(spot => spot.slotId === slotId)?.status || 'available';
        const isSelected = selectedSpot && selectedSpot.slotId === slotId;
        rowContainer.push(
          <TouchableOpacity
            key={slotId}
            style={[
              style.slot(slotWidth),
              STYLES.bgColor(
                isSelected
                  ? 'purple'
                  : status === 'available'
                  ? '#91A3B0'
                  : status === 'Booked'
                  ? '#3F3F4E'
                  : '#3F3F4E',
              ),
            ]}
            onPress={() => {
              const slotDetails = {
                slotId,
                slotName,
                status,
                row,
                col,
              };
              setSelectedSpot(slotDetails);
            }}>
            <View style={style.rowContainer(slotWidth)}>
              <AppText
                title={slotName}
                color={'black'}
                fontFamily={Fonts.mavenRegular}
              />
              <AppText
                title={status}
                color={'black'}
                variant={'body3'}
                fontFamily={Fonts.mavenRegular}
              />
            </View>
          </TouchableOpacity>,
        );
      }
      parkingLayout.push(
        <View key={row} style={style.parkingLayout}>
          {rowContainer}
        </View>,
      );
    }
    const entryExitRoute = (
      <View style={style.topRoute}>
        <View style={style.entryPoint}>
          <AppText title={LABELS.enter} variant={'body2'} color={'white'} />
        </View>
        <View style={style.routeContainer}>
          <Icon
            SVGIcon={
              <SVG.entryLeftArrow fill={'white'} height={20} width={20} />
            }
          />
          <View style={style.route}></View>
          <Icon
            SVGIcon={
              <SVG.exitRightArrow fill={'white'} height={20} width={20} />
            }
          />
        </View>
        <View style={style.exitPoint}>
          <AppText title={LABELS.exit} variant={'body2'} color={'white'} />
        </View>
      </View>
    );

    if (spaceDetails.entryExitDirection === 'Center') {
      parkingLayout.splice(spaceDetails.noOfRows / 2, 0, entryExitRoute);
    }
    if (spaceDetails.entryExitDirection === 'Top') {
      parkingLayout.splice(0, 0, entryExitRoute);
    }

    if (spaceDetails.entryExitDirection === 'Bottom') {
      parkingLayout.splice(spaceDetails.noOfRows, 0, entryExitRoute);
    }
    return parkingLayout;
  };
  const spotSelectionHandler = () => {
    if (selectedSpot && selectedSpot.status === 'available') {
      setShowConfirmModal(true);
    } else if (selectedSpot && selectedSpot.status != 'available') {
      Toast(`${ERRORS.spotAvailability} ${selectedSpot.status}`);
    } else {
      Toast(ERRORS.noSlotSelection);
    }
  };
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('black')]}>
        {isLoading && <ModalBox isVisible={isLoading} />}
        <AppHeader
          title={'Select Parking Spot'}
          theme={'dark'}
          mL={15}
          iconLeft={<SVG.leftArrow height={20} width={20} fill={'white'} />}
          onLeftIconPress={() => navigation.goBack()}
        />
        <View style={[STYLES.pH(20)]}>
          {generateParkingLayout()}
          <Space mT={20} />
          <GradientButton
            title={LABELS.selectSpot}
            textColor={'white'}
            onPress={spotSelectionHandler}
          />
          <Space mT={20} />
        </View>
        <Modal
          isVisible={showConfirmModal}
          style={{
            margin: 0,
          }}>
          <View style={style.bookingModalContainer}>
            <View style={style.contentContainer}>
              <View style={[STYLES.width('50%')]}>
                <AppText
                  title={LABELS.confirmBooking}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                  variant={'h3'}
                />
              </View>
              <DateTimePickerModal
                isVisible={isDateTimePickerVisible}
                mode={dateTimeMode}
                onConfirm={handlePickedValue}
                onCancel={hideDateTimePicker}
              />
            </View>
            <View style={style.bookingDetailsContainer}>
              <Space mT={15} />
              <View style={[STYLES.row]}>
                <View style={[STYLES.width('50%')]}>
                  <AppText
                    title={LABELS.parkingArea}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <AppText
                    title={LABELS.slotID}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <AppText
                    title={LABELS.price}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />

                  <Space mT={15} />
                  <AppText
                    title={LABELS.date}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <AppText
                    title={LABELS.time}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />
                </View>

                <View style={[STYLES.width('50%')]}>
                  <AppText
                    title={spaceDetails && spaceDetails.spaceName}
                    theme={theme}
                    variant={'body1'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <AppText
                    title={selectedSpot && `${selectedSpot.slotId}`}
                    theme={theme}
                    variant={'body1'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <AppText
                    title={spaceDetails && `Rs.${spaceDetails.price}/hr`}
                    theme={theme}
                    variant={'body1'}
                    fontFamily={Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <View style={[STYLES.row]}>
                    <AppText
                      title={LABELS.selectDate}
                      theme={theme}
                      variant={'body1'}
                      fontFamily={Fonts.latoRegular}
                      onPress={() => {
                        showDateTimePicker('date');
                      }}
                    />
                    <Space mL={5} />
                    <Icon
                      SVGIcon={
                        <SVG.calender fill={'black'} height={15} width={15} />
                      }
                      onPress={() => {
                        showDateTimePicker('date');
                      }}
                    />
                  </View>
                  <Space mT={15} />
                  <View style={[STYLES.row]}>
                    <AppText
                      title={LABELS.selectTime}
                      theme={theme}
                      variant={'body1'}
                      fontFamily={Fonts.latoRegular}
                      onPress={() => {
                        showDateTimePicker('time');
                      }}
                    />
                    <Space mL={5} />
                    <Icon
                      SVGIcon={
                        <SVG.clock fill={'black'} height={15} width={15} />
                      }
                      onPress={() => {
                        showDateTimePicker('time');
                      }}
                    />
                  </View>
                </View>
              </View>
              <Space mT={10} />
              <View style={[STYLES.row, STYLES.AICenter]}>
                <View style={[STYLES.width('50%')]}>
                  <AppText
                    title={LABELS.Duration}
                    theme={theme}
                    variant={'body1'}
                    color={'grey'}
                    fontFamily={Fonts.latoRegular}
                  />
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={[STYLES.row]}>
                    {ParkingDuration &&
                      ParkingDuration.map((item, index) => {
                        return (
                          <View key={index}>
                            <TouchableOpacity
                              onPress={() => {
                                setSelectedDuration(item.value);
                                setDuration(item.id);
                              }}>
                              <View
                                style={
                                  selectedDuration == item.value
                                    ? style.selectedDurationContainer
                                    : style.unSelectedDurationContainer
                                }>
                                <AppText
                                  title={item.value}
                                  variant={'body2'}
                                  fontFamily={Fonts.latoRegular}
                                  color={
                                    selectedDuration == item.value
                                      ? 'white'
                                      : 'purple'
                                  }
                                  onPress={() => {
                                    setSelectedDuration(item.value);
                                    setDuration(item.id);
                                  }}
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                  </View>
                </ScrollView>
              </View>
              <Space mT={15} />
              <View
                style={[
                  STYLES.rowCenterBt,
                  STYLES.JCCenter,
                  STYLES.pH(HORIZON_MARGIN),
                ]}>
                <AppButton
                  title={LABELS.cancel}
                  textVariant={'h5'}
                  theme={'light'}
                  extraStyle={{btnContainer: {width: '50%'}}}
                  onPress={() => {
                    setShowConfirmModal(false);
                  }}
                />
                <Space mL={10} />
                <GradientButton
                  title={LABELS.confirm}
                  textColor={'white'}
                  textVariant={'h5'}
                  theme={'light'}
                  onPress={bookingConfirmationHandler}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};
export default SpotSelectionScreen;
