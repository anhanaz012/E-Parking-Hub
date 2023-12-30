import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
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
import { styles } from './styles';
const AreaLayoutScreen = () => {
  const [spots, setSpots] = useState();
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [selectedStatus, setselectedStatus] = useState('Available');
  const [isSlotEdit, setIsSlotEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const vendorData = {
    numRows: 4,
    numSpots: 16,
    entryExitPoints: 'center',
    rowsPosition: 'horizontal',
  };
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
    setTimeout(() => {
      slotGenerator();
      setIsLoading(false);
    }, 1000);
    const slotGenerator = () => {
      const tempSpots = [];
      for (let row = 1; row <= vendorData.numRows; row++) {
        for (
          let col = 1;
          col <= vendorData.numSpots / vendorData.numRows;
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
      tempSpots[index].status = selectedStatus;
      setSpots(tempSpots);
    }
    setIsSlotEdit(false);
  };

  const editStatusHandler = item => {
    const value = item.value;
    setselectedStatus(value);
  };
  const generateParkingLayout = () => {
    const parkingLayout = [];
    for (let row = 1; row <= vendorData.numRows; row++) {
      const rowContainer = [];
      for (
        let col = 1;
        col <= vendorData.numSpots / vendorData.numRows;
        col++
      ) {
        const {width} = Dimensions.get('window');
        const cols = vendorData.numSpots / vendorData.numRows;
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
    if (vendorData.entryExitPoints === 'center') {
      parkingLayout.splice(vendorData.numRows / 2, 0, entryExitRoute);
    }
    if (vendorData.entryExitPoints === 'top') {
      parkingLayout.splice(0, 0, entryExitRoute);
    }

    if (vendorData.entryExitPoints === 'bottom') {
      parkingLayout.splice(vendorData.numRows, 0, entryExitRoute);
    }
    return parkingLayout;
  };
  const style = styles(vendorData);
  return (
    <>
      <ScrollView style={style.topContainer}>
        {isLoading && <ModalBox isVisible={isLoading} />}
        <AppHeader
          title={LABELS.pickSpot}
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
          title={'Continue'}
          extraStyle={{
            btnContainer: {
              marginVertical: 20,
              width: '90%',
              alignSelf: 'center',
            },
          }}
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
