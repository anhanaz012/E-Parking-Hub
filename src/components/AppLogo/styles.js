import {StyleSheet} from 'react-native';
export const styles = (height, width, alignSelf) =>
  StyleSheet.create({
    image: {
      height: height ? height : 150,
      width: width ? width : 150,
      alignSelf: alignSelf ? alignSelf : 'center',
    },
  });
