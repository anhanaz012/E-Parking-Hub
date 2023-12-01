import {StyleSheet} from 'react-native';
import {COLORS, HEIGHT} from '../../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: HEIGHT * 0.9,
      backgroundColor: COLORS[theme].background,
    },
    imgContainer: {
      height: '45%',
      width: '100%',
      justifyContent: 'flex-end',
    },
    contentContainer: {
      height: '50%',
      width: '100%',
      justifyContent: 'flex-start',
      paddingHorizontal: 25,
    },
  });
