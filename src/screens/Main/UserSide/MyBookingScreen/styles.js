import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  selectedBtn: {
    backgroundColor: COLORS.light.primary,
    width: '45%',
    elevation: 0,
  },
  contentContainer: {
    width: '75%',
  },
  unSelectedBtn: {
    backgroundColor: 'transparent',
    width: '45%',
    elevation: 0,
  },
  activeBookingCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: 155,
    elevation: 5,
    paddingHorizontal: 10,
  },
  activeCardContent:{
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.light.steelGrey,
    borderBottomWidth: 1,
  },
  completedBookingCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: 100,
    elevation: 5,
    paddingHorizontal: 10,
  },
});
