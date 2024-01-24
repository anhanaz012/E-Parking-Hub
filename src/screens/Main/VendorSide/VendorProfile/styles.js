import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  infoContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.light.gray,
    alignItems: 'center',
  },
  logoutContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    borderColor: COLORS.light.gray,
    alignItems: 'center',
  },
  editModalContainer: {
    height: 170,
    width: '100%',
    backgroundColor: COLORS.light.white,
    paddingHorizontal:20,
  },
});