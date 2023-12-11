import {StyleSheet} from 'react-native';
import {COLORS, HORIZON_MARGIN} from '../../assets/theme';
import { Fonts } from '../../assets/theme';
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 20,
    height: 400,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: HORIZON_MARGIN,
  },
  textInpuCont: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: COLORS.dark.white,
    paddingHorizontal: HORIZON_MARGIN,
    fontFamily: Fonts.latoRegular,
  },
  dropdownCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropDown: {
    width: '30%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    backgroundColor: COLORS.dark.white,
    paddingHorizontal: HORIZON_MARGIN,
    fontFamily: Fonts.latoRegular,
  },
  backBtn: {
    borderColor: 'grey',
  },
  backBtnText: {
    color: 'grey',
  },
});
