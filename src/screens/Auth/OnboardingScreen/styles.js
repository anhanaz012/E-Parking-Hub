import {StyleSheet} from 'react-native';
import {COMMON_COLORS} from '../../../assets/theme';
export const styles = StyleSheet.create({
  activeTab: {
    height: 30,
    width: '100%',
    backgroundColor: 'purple',
  },
  dotsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    height: 8,
    width: 25,
    borderRadius: 4,
    backgroundColor: COMMON_COLORS.primary,
  },
  inactiveDot:{
    height:8,
    width:8,
    borderRadius:4,
    backgroundColor:COMMON_COLORS.steelGrey

  }
});
