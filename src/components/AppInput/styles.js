import {StyleSheet} from 'react-native';
import {COLORS, COMMON_COLORS} from '../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    textInputContainer: multiline => ({
      width: '85%',
    }),
    textInput: (multiline, isFocused) => ({
      height: 55,
      width: '100%',
      color: COLORS[theme].text,
      fontSize: 16,
      padding: 10,
      borderWidth: 1,
      borderColor: isFocused ? COLORS[theme].inputBorder : 'transparent',
      borderRadius: 10,
      backgroundColor: COLORS[theme].input,
    }),
  });
