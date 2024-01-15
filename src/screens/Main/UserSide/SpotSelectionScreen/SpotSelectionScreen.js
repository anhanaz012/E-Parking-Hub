import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, Fonts, STYLES} from '../../../../assets/theme';
import {styles} from './styles';
import AppText from '../../../../components/AppText/AppText';
import {LABELS} from '../../../../labels';
import {SVG} from '../../../../assets/svg';
import Icon from '../../../../components/Icon/Icon';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
const SpotSelectionScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const spotsData = useSelector(state => state.area.parkingAreas);
  const spaceDetails = useSelector(state => state.area.areaDetails);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const style = styles(spaceDetails);
  const generateParkingLayout = () => {
    const parkingLayout = [];
    const {width} = Dimensions.get('window');
    const cols = spaceDetails.noOfColumns;
    const slotWidth = width / cols - 15;
    for (let row = 0; row < spaceDetails.noOfRows; row++) {
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
                  ? COLORS.light.primary
                  : status === 'available'
                  ? '#594D5B'
                  : status === 'Booked'
                  ? '#3F3F4E'
                  :
                  '#3F3F4E'
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
              setSelectedSpot(slotDetails)
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
                variant = {'body3'}
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
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('black')]}>
        <AppHeader
          title={'Select Parking Spot'}
          theme={'dark'}
          mL={15}
          iconLeft={<SVG.leftArrow height={20} width={20} fill={'white'} />}
        />
        <View style={[STYLES.pH(20)]}>
          {generateParkingLayout()}
          <Space mT={20} />
          <GradientButton title={LABELS.selectSpot} textColor={'white'} />
        </View>
      </ScrollView>
    </>
  );
};
export default SpotSelectionScreen;
