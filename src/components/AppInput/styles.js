import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    textInputContainer: (multiline, isFocused) => ({
      width: '100%',
      flexDirection: 'row',
      backgroundColor: COLORS[theme].input,
      paddingHorizontal: 15,
      borderRadius: 10,
      borderColor: isFocused ? COLORS[theme].inputBorder : 'transparent',
      borderWidth: 1,
    }),
    textInput: (multiline, isFocused) => ({
      height: 55,
      width: '85%',
      color: COLORS[theme].text,
      fontSize: 15,
      padding: 10,
      fontFamily: Fonts.latoRegular,
    }),
  });
