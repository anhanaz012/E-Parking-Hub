import {StyleSheet} from 'react-native';
import { COLORS } from '../../../../assets/theme';
export const styles = StyleSheet.create({
  detailsCardContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  areaTimeContainer:{
    height: 35,
    width: '45%',
    borderWidth: 1,
    borderColor: COLORS.dark.gradientPurple,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  }
});
