import {StyleSheet} from 'react-native';
import { Fonts } from '../../../../assets/theme';
export const styles = StyleSheet.create({
  horizontalCardContainer: {
    height: 210,
    padding: 10,
    width: 185,
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 20,
  },
  verticalCardContainer: {
    height: 130,
    width: '100%',
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
  },
  textInputCont:{
    backgroundColor: 'white',
    elevation: 5,
    width: '80%',
  },
  textInput:{
    fontSize: 13,
    backgroundColor: 'white',
    fontFamily: Fonts.latoRegular,
  }
});
