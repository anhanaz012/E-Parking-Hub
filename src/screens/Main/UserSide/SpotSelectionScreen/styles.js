import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../assets/theme';
export const styles = spaceDetails =>
  StyleSheet.create({
    slot: slotWidth => ({
      height: 90,
      width: slotWidth,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    }),
    row: {
      height: 1,
      flexDirection: 'row',
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
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
    entryPoint:{
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:
        spaceDetails.entryPoint === 'top-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'top-right'
          ? 'flex-end'
          : spaceDetails.entryPoint === 'bottom-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'bottom-right'
          ? 'flex-end'
          : spaceDetails.entryPoint === 'center-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'center-right'
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
        spaceDetails.entryPoint === 'top-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'top-right'
          ? 'flex-end'
          : spaceDetails.entryPoint === 'bottom-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'bottom-right'
          ? 'flex-end'
          : spaceDetails.entryPoint === 'center-left'
          ? 'flex-start'
          : spaceDetails.entryPoint === 'center-right'
          ? 'flex-end'
          : 'center',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      height: 100,
      width: '100%',
    },
    topContainer: {
      height: '100%',
      backgroundColor: 'black',
      width: '100%',
    },
    horizntalCenterCont: {
      height: '10%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100%',
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
    selectedStatus: {
      height: 40,
      width: '30%',
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    unSelectedStatus: {
      height: 40,
      width: '30%',
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slot: slotWidth => ({
      height: 90,
      width: slotWidth,
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    }),
    rowContainer: slotWidth => ({
      borderRadius: 5,
      width: slotWidth,
      backgroundColor: 'white',
      height: 65,
      borderWidth: 2,
      // paddingHorizontal: 15,
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    parkingLayout: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      borderBottomWidth: 0.5,
      width: '80%',
      alignSelf: 'center',
    },
    modalContainer: {
      height: 200,
      width: '100%',
      backgroundColor: 'white',
      paddingHorizontal: 15,
      borderRadius: 10,
    },
    modalHeadingContainer: {
      height: 50,
      justifyContent: 'center',
      width: '100%',
    },
    modalBtnContainer: {
      height: 40,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },
    modalCancelBtn: {
      height: 40,
      width: '25%',
      borderRadius: 20,
      backgroundColor: COLORS.light.input,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      backgroundColor: 'white',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      height:'55%',
      borderTopLeftRadius: 30,
      elevation:5,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    detailsContainer: {
      backgroundColor: 'white',
      width: '100%',
      
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    placeNoContainer: {
      width: '45%',
      padding: 20,
      borderRadius: 15,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    floorNoContainer: {
      width: '45%',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      elevation: 2,
      backgroundColor: 'white',
    },
    selectedDurationContainer: {
      height: 30,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: 'purple',
    },
    unSelectedDurationContainer: {
      height: 30,
      width: 60,
      borderWidth: 1,
      borderColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    },
  });
