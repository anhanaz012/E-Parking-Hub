import {StyleSheet} from 'react-native';
export const styles = vendorData =>
  StyleSheet.create({
    row: {
      height: 1,
      flexDirection: 'row',
      backgroundColor:'yellow',
      alignItems: 'center',
      justifyContent:'center',
      borderColor: 'white',
      width: '100%',
    },
    col: {
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: 'white',
    },
    parkingLot: {
      height: 50,
      width: 50,
      borderWidth: 1,
      borderColor: 'white',
    },
    route: {
      width: '80%',
      height: 0.5,
      borderWidth: 1,
      borderColor: 'gray',
      borderStyle: 'dashed',
    },
    routeContainer: {
      width: '70%',
      height: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    entryPoint: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:
        vendorData.entryPoint === 'top-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'top-right'
          ? 'flex-end'
          : vendorData.entryPoint === 'bottom-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'bottom-right'
          ? 'flex-end'
          : vendorData.entryPoint === 'center-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'center-right'
          ? 'flex-end'
          : 'center',
      width: '15%',
    },
    carsAreaContainer: {
      height: '55%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    exitPoint: {
      height: 50,
      alignSelf:
        vendorData.entryPoint === 'top-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'top-right'
          ? 'flex-end'
          : vendorData.entryPoint === 'bottom-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'bottom-right'
          ? 'flex-end'
          : vendorData.entryPoint === 'center-left'
          ? 'flex-start'
          : vendorData.entryPoint === 'center-right'
          ? 'flex-end'
          : 'center',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'pink',
    },
    topContainer: {
      height: '45%',
      backgroundColor: 'black',
      // justifyContent:'center',
      // alignItems:'center',
      width: '100%',
    },
    horizntalCenterCont: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100%',
      // borderTopWidth: 0.5,
      // borderBottomWidth: 0.5,
      borderColor: 'white',
    },
    bottomContainer: {
      height: '45%',
      width: '100%',
      backgroundColor: 'black',
    },
    verticalLeftCont: {
      height: '100%',
      width: '40%',
    },
    verticalCenterCont: {
      height: '100%',
      width: '20%',
    },
    verticalRightCont: {
      height: '100%',
      width: '40%',
    },
    topRoute: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    topLeftRoute: {
      height: '100%',
      width: '15%',
      backgroundColor: 'pink',
      position: 'absolute',
      left: 0,
    },
    topRightRoute: {
      height: '100%',
      width: '10%',
      backgroundColor: 'pink',
      position: 'absolute',
      right: 0,
    },
    leftRoute: {
      height: '100%',
      width: '10%',
      position: 'absolute',
      left: 0,
    },
    rightRoute: {
      height: '100%',
      width: '10%',
      backgroundColor: 'red',
      position: 'absolute',
      right: 0,
    },
    horizntalCenterRoute: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'indigo',
    },
    bottomRoute: {
      height: 50,
      width: '100%',
      backgroundColor: 'indigo',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
    },
    areaContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
