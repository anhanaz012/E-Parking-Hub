import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/theme';
export const styles = StyleSheet.create({
  profileContainer: {
    height: 200,
    width: 200,
    borderRadius: 50,
    backgroundColor: COLORS.dark.steelGrey,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  dottedContainer: {
    height: 180,
    width: 180,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'purple',
    borderRadius: 50,
  },
});
