import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SVG} from './src/assets/svg';
import {HORIZON_MARGIN, STYLES} from './src/assets/theme';
import AppHeader from './src/components/AppHeader/AppHeader';
import GradientButton from './src/components/GradientButton/GradientButton';
import Space from './src/components/Space/Space';
import {LABELS} from './src/labels';
import {styles} from './styles';
import {Text} from 'react-native-svg';
import AppText from './src/components/AppText/AppText';
const ChooseParkingAreaScreen = () => {
  const [spots, setSpots] = useState();
  const vendorData = {
    numRows: 6,
    numSpots: 16,
    entryPoint: 'center-left',
    exitPoint: 'center-right',
    rowsPosition: 'horizontal',
  };
  // const parkingSlotsGenerator = () => {
  //   // const nofSlotsInRow = Math.round(vendorData.numSpots / vendorData.numRows);
  //   // console.log(nofSlotsInRow)
  //   // for(i = 1; i <= nofSlotsInRow; i++) {
  //   // return i
  //   // }
  //   const spots = [];
  //   let spotCount = 1;

  //   for (let row = 1; row <= vendorData.numRows; row++) {
  //     for (let col = 1; col <= vendorData.numSpots / vendorData.numRows; col++) {
  //       spots.push({
  //         id: spotCount++,
  //         row,
  //         col,
  //         status: 'booked', // Replace with actual status from the database
  //       });
  //     }
  //   }

  //   return spots;
  // };

  const generateParkingLayout = () => {
    const parkingLayout = [];
    const columns = vendorData.numSpots / vendorData.numRows;
    const wholeNum = Math.round(columns);
    console.log(wholeNum)
    // if (columns !== wholeNum) {
    //   console.log('not a whole number');
    // } else {
    //   console.log('whole number');
    // }
    if (columns % 1 !== 0) {
      console.log('not a whole number');
    } else {
      console.log('whole number');
    }

    for (let row = 1; row <= vendorData.numRows; row++) {
      const rowContainer = [];
      for (
        let slot = 1;
        slot <= vendorData.numSpots / vendorData.numRows;
        slot++
      ) {
        rowContainer.push();
      }
      parkingLayout.push();
    }
    return parkingLayout;
  };
  const parkingSlotsGenerator = () => {
    const spots = [];
    let spotCount = 1;
    for (let row = 1; row <= vendorData.numRows; row++) {
      const spotsPerRow = Math.ceil(vendorData.numSpots / vendorData.numRows);
      for (let col = 1; col <= spotsPerRow; col++) {
        const spotId = spotCount++;
        spots.push({
          row,
          col,
          id: Math.random(),
          name: 'A' + spotId,
          status: 'available',
        });
      }
    }
    setSpots(spots);

    return spots;
  };
  const style = styles(vendorData);
  return (
    <>
      {vendorData.rowsPosition === 'horizontal' ? (
        <>
          <View style={style.topContainer}>
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

            <View style={style.areaContainer}>
              {spots ? generateParkingLayout : <></>}
              {/* <View style={style.topRoute}>
              <View style={style.entryPoint}>
                <AppText
                  title={LABELS.enter}
                  variant={'body2'}
                  color={'white'}
                />
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
                <AppText
                  title={LABELS.exit}
                  variant={'body2'}
                  color={'white'}
                />
              </View>
            </View> */}
              <Space mT={10} />
              {/* <View style={style.carsAreaContainer}>
                <View style={[STYLES.row]}>
                  <View style={style.parkingLot}></View>
                  <View style={style.parkingLot}></View>
                  <View style={style.parkingLot}></View>
                </View>
                <View style={[STYLES.row]}>
                  <View style={style.parkingLot}></View>
                  <View style={style.parkingLot}></View>
                  <View style={style.parkingLot}></View>
                </View>
              </View> */}
            </View>
          </View>

          <View style={style.horizntalCenterCont}>
            {/* <View style={style.topRoute}>
              <View style={style.entryPoint}>
                <AppText
                  title={LABELS.enter}
                  variant={'body2'}
                  color={'white'}
                />
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
                <AppText
                  title={LABELS.exit}
                  variant={'body2'}
                  color={'white'}
                />
              </View>
            </View> */}
          </View>
          <View style={style.bottomContainer}>
            {/* <View style={style.carsAreaContainer}>
              <View style={[STYLES.row]}>
                <View style={style.parkingLot}></View>
                <View style={style.parkingLot}></View>
                <View style={style.parkingLot}></View>
              </View>
              <View style={[STYLES.row]}>
                <View style={style.parkingLot}></View>
                <View style={style.parkingLot}></View>
                <View style={style.parkingLot}></View>
              </View>
            </View> */}
            <View
              style={[STYLES.pH(HORIZON_MARGIN)]}
              // style={{position: 'absolute', bottom: 20, paddingHorizontal: 15}}
            >
              {/* <View style={[style.topRoute]}>
                <View style={style.entryPoint}>
                  <AppText
                    title={LABELS.enter}
                    variant={'body2'}
                    color={'white'}
                  />
                </View>
                <View style={style.routeContainer}>
                  <Icon
                    SVGIcon={
                      <SVG.entryLeftArrow
                        fill={'white'}
                        height={20}
                        width={20}
                      />
                    }
                  />
                  <View style={style.route}></View>
                  <Icon
                    SVGIcon={
                      <SVG.exitRightArrow
                        fill={'white'}
                        height={20}
                        width={20}
                      />
                    }
                  />
                </View>
                <View style={style.exitPoint}>
                  <AppText
                    title={LABELS.exit}
                    variant={'body2'}
                    color={'white'}
                  />
                </View>
              </View> */}
              <GradientButton
                title={LABELS.pickSpot}
                textColor={'white'}
                onPress={generateParkingLayout}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={[STYLES.flex1, STYLES.row]}>
            <View style={style.verticalLeftCont}></View>
            <View style={style.verticalCenterCont}></View>
            <View style={style.verticalRightCont}></View>
          </View>
        </>
      )}
    </>
  );
};

export default ChooseParkingAreaScreen;
