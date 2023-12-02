import {StyleSheet} from 'react-native';
import {COLORS, HORIZON_MARGIN} from '../../../../assets/theme';
export const styles = theme =>
  StyleSheet.create({
    cardContainer: {
      width: '100%',
      height: 100,
      elevation: 5,
      backgroundColor: COLORS.light.input,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 20,
      paddingHorizontal: HORIZON_MARGIN,
    },
    contentContainer: {
      width: '75%',
    },
  });
