import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/theme';
export const styles = (variant, theme) =>
  StyleSheet.create({
    btnContainer: {
      height: 50,
      width: '100%',
      backgroundColor: COLORS.dark.steelGrey,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'white',
      borderRadius: 10,
      elevation: 5,
    },
  });
