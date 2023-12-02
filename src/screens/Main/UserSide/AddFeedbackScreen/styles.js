import {StyleSheet} from 'react-native';
import { COLORS, Fonts } from '../../../../assets/theme';
export const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'white',
    borderColor: COLORS.light.gray,
    paddingHorizontal: 0,
    paddingTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textInput: {
    fontFamily: Fonts.latoRegular,
    fontSize: 14,
    width: '100%',
    color: COLORS.light.text,
  },
});
