import { StyleSheet } from 'react-native';
import { COLORS } from '../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[theme].background,
    },
    imgContainer: {
      height: '50%',
      width: '100%',
      justifyContent: 'flex-end',
    },
    contentContainer: {
      height: '50%',
      width: '100%',
      paddingHorizontal: 25,
    },
  });
