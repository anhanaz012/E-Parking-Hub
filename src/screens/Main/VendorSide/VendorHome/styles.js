import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  bookingsContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    bottom: 10,
  },
  bookingCard: {
    height: 160,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: COLORS.light.steelGrey,
    elevation: 5,
    borderRadius: 10,
  },
});
