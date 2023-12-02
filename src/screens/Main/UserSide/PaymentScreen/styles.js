import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  payMethodContainer: {
    height: 80,
    width: '100%',
    backgroundColor: COLORS.light.input,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    justifyContent:'space-between',
    borderColor : COLORS.light.gray,
    borderWidth:1,
    paddingHorizontal:15,
    elevation:5
  },
});
