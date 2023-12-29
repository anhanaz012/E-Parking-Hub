import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    placeholderStyle: {
      color: COLORS[theme].placeholderTextColor,
      fontFamily: Fonts.latoRegular,
      fontSize: 14
    },
    containerStyle: {
      height: 50,
      width: '100%',
      backgroundColor: COLORS.light.input,
      paddingHorizontal: 25,
      borderRadius: 10,
    },
    textContainerStyle: {
      width: '100%',
      height: 55,
      borderRadius: 10,
      backgroundColor: COLORS[theme].input,
    },
    codeTextStyle: {
      color: COLORS[theme].placeholderTextColor,
      fontFamily: Fonts.latoRegular,
    },
    textInputStyle: {
      height: 55,
      color: COLORS[theme].text,
      fontFamily: Fonts.latoRegular,
    },
  });
