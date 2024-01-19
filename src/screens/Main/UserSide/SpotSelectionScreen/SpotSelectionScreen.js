import React, {useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
const SpotSelectionScreen = ({navigation}) => {
  const theme = 'light';
  const [isLoading, setIsLoading] = useState(false);
  const spotsData = useSelector(state => state.area.parkingAreas);
  const spaceDetails = useSelector(state => state.area.areaDetails);
  console.log(spaceDetails, 'spaceDetails');
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const style = styles(spaceDetails);
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
    if (selectedSpot) {
      setShowConfirmModal(true);
    }
  };
  const [selected, setSelected] = useState('');
  const [showCalender, setShowCalender] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const newDate = date.toDateString();
    const newTime = date.toLocaleTimeString();
    hideDatePicker();
  };
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('black')]}>
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
        </View>
        <Modal
          isVisible={showConfirmModal}
          style={{
            margin: 0,
          }}>
          <View style={style.container}>
            <View
              style={[
                STYLES.rowCenterBt,
                STYLES.width100,
                STYLES.AICenter,
                STYLES.pH(15),
              ]}>
              <View style={[STYLES.width('50%')]}>
                <AppText
                  title={LABELS.confirmBooking}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                  variant={'h3'}
                />
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            <Space mT={20} />
            <View style={[STYLES.pH(HORIZON_MARGIN)]}>
              <Space mT={20} />
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
                    fontFamily = {Fonts.latoRegular}
                  />
                  <Space mT={15} />
                  <View style={[STYLES.row]}>
                    <AppText
                      title={'Select Date'}
                      theme={theme}
                      variant={'body1'}
                      fontFamily={Fonts.latoRegular}
                      onPress={showDatePicker}
                    />
                    <Space mL={5} />
                    <Icon
                      SVGIcon={
                        <SVG.calender fill={'black'} height={15} width={15} />
                      }
                      onPress={showDatePicker}
                    />
                  </View>
                  <Space mT={15} />
                  <View style={[STYLES.row]}>
                    <AppText
                      title={'Select Time'}
                      theme={theme}
                      variant={'body1'}
                      fontFamily={Fonts.latoRegular}
                    />
                    <Space mL={5} />
                    <Icon
                      SVGIcon={
                        <SVG.clock fill={'black'} height={15} width={15} />
                      }
                    />
                  </View>
                </View>
              </View>

              <Space mT={15} />
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
                    <View style={style.selectedDurationContainer}>
                      <AppText
                        title={'1 Hour'}
                        variant={'body2'}
                        fontFamily={Fonts.latoRegular}
                        color={'white'}
                      />
                    </View>
                    <Space mR={10} />
                    <View style={style.unSelectedDurationContainer}>
                      <AppText
                        title={'2 Hour'}
                        variant={'body2'}
                        fontFamily={Fonts.latoRegular}
                        color={'purple'}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
              <Space mT={35} />
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
                  onPress={() => {
                    navigation.navigate('HomeStack', {
                      screen: 'FeeCalculationScreen',
                    });
                  }}
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
