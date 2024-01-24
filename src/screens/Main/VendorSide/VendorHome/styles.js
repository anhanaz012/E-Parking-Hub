import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/theme';
export const styles = StyleSheet.create({
  bookingsContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    bottom: 20,
  },
  bookingCard: {
    height: 160,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor:'white',
    elevation: 5,
    borderRadius: 10,
  },
  declineBtn:{
    width: '40%',
    backgroundColor: 'transparent',
    borderColor: COLORS.light.red,
    elevation: 0,
    borderWidth: 1,
    height: 45,
  },
  acceptBtn:{
    width: '40%',
    backgroundColor: 'transparent',
    borderColor: COLORS.light.primary,
    elevation: 0,
    borderWidth: 1,
    height: 45,
  }
});
