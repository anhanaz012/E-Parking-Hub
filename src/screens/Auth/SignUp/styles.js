import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    containerStyle: {
      width: '100%',
      borderRadius: 10,
      height: 55,
      backgroundColor: COLORS[theme].input,
    },
    textContainerStyle: {
      width: '100%',
      height: 55,
      borderRadius:10,
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
