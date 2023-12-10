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
    height: 140,
    elevation: 5,
    paddingHorizontal: 10,
  },
  activeCardContent: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.light.steelGrey,
    borderBottomWidth: 1,
  },
  completedCardContent: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.light.steelGrey,
    borderBottomWidth: 1,
  },
  completedBookingCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    height: 110,
    elevation: 5,
    paddingHorizontal: 10,
  },
});
