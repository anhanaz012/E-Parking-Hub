import {StyleSheet} from 'react-native';
export const styles = () =>
  StyleSheet.create({
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container: {
      backgroundColor: 'white',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      // height:'50%',
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
  });
