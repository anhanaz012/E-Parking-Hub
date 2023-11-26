import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  iconContainer: (alignSelf, iconLeft) => ({
    alignSelf: alignSelf ? alignSelf : 'flex-start',
    flexDirection: iconLeft ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
