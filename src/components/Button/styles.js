import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/theme';
export const styles = (variant, theme) =>
  StyleSheet.create({
    btnContainer: {
      height: 50,
      width: '100%',
      backgroundColor: COLORS.dark.primary,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      color: 'white',
      borderRadius: 10,
      elevation: 5,
      // // shadowColor:'rgba(255, 255, 255, 0.1)',
      // shadowColor:'black',
      // // shadowColor:'rgba(255, 255, 204, 0.5)',
      // shadowOffset: {width: 0, height: 5},
      // shadowOpacity: 0.8,
      // shadowRadius: 5,
    },
  });
