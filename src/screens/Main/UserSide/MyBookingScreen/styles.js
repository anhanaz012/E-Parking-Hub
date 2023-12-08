import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  selectedBtn: {
    backgroundColor: COLORS.light.primary,
    width: '45%',
    elevation: 0,
  },
  unSelectedBtn: {
    backgroundColor: 'transparent',
    width: '45%',
    elevation: 0,
  },
});
