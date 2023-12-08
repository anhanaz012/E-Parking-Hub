import {StyleSheet} from 'react-native';
export const styles = () =>
  StyleSheet.create({
    container: () => ({
      flex: 1,
      backgroundColor: 'red',
    }),
    spotContainer: () => ({
      height: 100,
      width: '25%',
      backgroundColor: 'yellow',
      margin: 10,
    }),
  });
