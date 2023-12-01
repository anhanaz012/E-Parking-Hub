import {StyleSheet} from 'react-native';
import {COLORS, HEIGHT, HORIZON_MARGIN} from '../../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    container: {
      paddingHorizontal: HORIZON_MARGIN,
    },

    contentContainer: {
      width: '100%',
      paddingHorizontal: HORIZON_MARGIN,
    },
  });
