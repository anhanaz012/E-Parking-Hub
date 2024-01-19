import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {slotsStatus} from '../../../../data/appData';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {Toast} from '../../../../utils/native';
import {styles} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AreaLayoutScreen = ({navigation}) => {
  const [spots, setSpots] = useState();
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedStatus, setselectedStatus] = useState('Available');
  const [isSlotEdit, setIsSlotEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginToken, setLoginToken] = useState(null);

  const vendorData = useSelector(state => state.auth.spaceData);
  const handleSlotSelection = slotDetails => {
    setSelectedSpot(slotDetails);
    const tempSpots = [...spots];
    const index = tempSpots.findIndex(
      slot => slot.slotId === slotDetails.slotId,
    );
    tempSpots[index].status = 'selected';
    setSpots(tempSpots);
  };
  useEffect(() => {
    setIsLoading(true);
    const getLoginToken = async () => {
      try {
        await AsyncStorage.getItem('vendorLoginToken').then(res => {
          if (res) {
            setLoginToken(res);
          }
        });
      } catch (err) {
        Toast('Error in fetching token');
      }
    };
    getLoginToken();
    setTimeout(() => {
      slotGenerator();
      setIsLoading(false);
    }, 1000);
    const slotGenerator = async () => {
      const tempSpots = [];
      for (let row = 1; row <= vendorData.noOfRows; row++) {
        for (
          let col = 1;
          col <= vendorData.noOfLots / vendorData.noOfRows;
          col++
        ) {
          const slotId = `abc_${row}_${col}`;
          const slotName = `A${row}${col}`;
          const status = 'available';
          const slotDetails = {
            slotId,
            slotName,
            status,
            row,
            col,
          };
          tempSpots.push(slotDetails);
        }
      }
      setSpots(tempSpots);
    };
  }, []);

  const updateSpotStatusHandler = () => {
    if (selectedSpot) {
      const tempSpots = [...spots];
      const index = tempSpots.findIndex(
        slot => slot.slotId === selectedSpot.slotId,
      );
      console.log(tempSpots[index], 'updated spot handler index');
      tempSpots[index].status = selectedStatus;
      setSpots(tempSpots);
    }
    setselectedStatus('Available');
    setIsSlotEdit(false);
  };

  const editStatusHandler = item => {
    const value = item.value;
    setselectedStatus(value);
  };
  const dataSetHandler = async () => {
    if (loginToken) {
      setIsLoading(true);
      await firestore()
        .collection('Vendors')
        .doc(loginToken)
        .get()
        .then(async res => {
          const previousData = res.data();
          const completeData = {...previousData, spots};
          await firestore()
            .collection('Vendors')
            .doc(loginToken)
            .set(completeData);
          await firestore()
            .collection('ParkingAreas')
            .doc(loginToken)
            .set(completeData);
          setIsLoading(false);
          Toast(LABELS.AreaLayoutUpdated);
          navigation.navigate('VendorBottomNavigation');
        })
        .catch(err => {
          Toast(ERRORS.somethingWent);
        });
    } else {
      setIsLoading(false);
      Toast(ERRORS.somethingWent);
    }
  };
  const generateParkingLayout = () => {
    const parkingLayout = [];
    for (let row = 1; row <= vendorData.noOfRows; row++) {
      const rowContainer = [];
      for (
        let col = 1;
        col <= vendorData.noOfLots / vendorData.noOfRows;
        col++
      ) {
        const {width} = Dimensions.get('window');
        const cols = vendorData.noOfLots / vendorData.noOfRows;
        const slotWidth = width / cols - 15;
        const slotId = `abc_${row}_${col}`;
        const slotName = `A${row}${col}`;
        const status = 'available';
        const slots = [];
        const slotDetails = {
          slotId,
          slotName,
          status,
          row,
          col,
        };
        slots.push(slotDetails);
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
                  ? 'gray'
                  : 'green',
              ),
            ]}
            onPress={() => {
              handleSlotSelection(slotDetails);
              setIsSlotEdit(true);
            }}>
            <View style={style.rowContainer(slotWidth)}>
              <AppText
                title={slotName}
                color={'black'}
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
    if (vendorData.entryExitDirection === 'Center') {
      parkingLayout.splice(vendorData.noOfRows / 2, 0, entryExitRoute);
    }
    if (vendorData.entryExitDirection === 'Top') {
      parkingLayout.splice(0, 0, entryExitRoute);
    }

    if (vendorData.entryExitDirection === 'Bottom') {
      parkingLayout.splice(vendorData.noOfRows, 0, entryExitRoute);
    }
    return parkingLayout;
  };
  const style = styles(vendorData);
  return (
    <>
      <ScrollView style={style.topContainer}>
        {isLoading && <ModalBox isVisible={isLoading} />}
        <AppHeader
          title={LABELS.ParkingDashboard}
          mL={15}
          theme={'dark'}
          iconLeft={<SVG.leftArrow fill={'white'} height={20} width={20} />}
          extraStyle={{
            container: {
              borderBottomWidth: 0.5,
              borderBottomColor: 'white',
            },
          }}
        />
        <Space mT={20} />
        {isLoading ? (
          <ModalBox isVisible={isLoading} />
        ) : (
          generateParkingLayout()
        )}
        <AppButton
          title={LABELS.continue}
          extraStyle={{
            btnContainer: {
              marginVertical: 20,
              width: '90%',
              alignSelf: 'center',
            },
          }}
          onPress={dataSetHandler}
        />
        {isSlotEdit && (
          <Modal isVisible={isSlotEdit} style={{flex: 1}}>
            <View style={style.modalContainer}>
              <View style={style.modalHeadingContainer}>
                <AppText
                  title={LABELS.setSlotStatus}
                  fontFamily={Fonts.merriWeatherSansRegular}
                  variant={'h4'}
                />
              </View>
              <Space mT={20} />
              <View
                style={[STYLES.rowCenter, STYLES.JCEvenly, STYLES.width100]}>
                {slotsStatus ? (
                  slotsStatus.map(item => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          editStatusHandler(item);
                        }}
                        style={
                          item.value === selectedStatus
                            ? style.selectedStatus
                            : style.unSelectedStatus
                        }>
                        <AppText
                          title={item.value}
                          color={
                            item.value === selectedStatus
                              ? 'purple'
                              : 'lightgrey'
                          }
                          fontFamily={Fonts.latoRegular}
                          onPress={() => {
                            editStatusHandler(item);
                          }}
                        />
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <></>
                )}
              </View>
              <Space mT={40} />
              <View style={style.modalBtnContainer}>
                <TouchableOpacity
                  style={style.modalCancelBtn}
                  onPress={() => {
                    setIsSlotEdit(false);
                  }}>
                  <AppText
                    title={LABELS.cancel}
                    color={'black'}
                    variant={'body2'}
                    fontFamily={Fonts.latoRegular}
                    onPress={() => {
                      setIsSlotEdit(false);
                    }}
                  />
                </TouchableOpacity>
                <Space mL={5} />
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '25%',
                    borderRadius: 20,
                    backgroundColor: 'purple',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={updateSpotStatusHandler}>
                  <AppText
                    title={LABELS.update}
                    color={'white'}
                    fontFamily={Fonts.latoRegular}
                    variant={'body2'}
                  />
                </TouchableOpacity>
                <Space mL={10} />
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </>
  );
};

export default AreaLayoutScreen;
