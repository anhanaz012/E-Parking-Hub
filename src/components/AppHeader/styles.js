import {StyleSheet} from 'react-native';
import {COLORS, HORIZON_MARGIN} from '../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    headerContainer: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: HORIZON_MARGIN,
    },
    leftContainer: {
      width: '70%',
      flexDirection: 'row',
    },
    rightContainer: {
      width: '30%',
      backgroundColor: COLORS[theme].background,
    },
  });
