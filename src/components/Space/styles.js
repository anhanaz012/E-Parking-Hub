import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: (mL, mR, mT, mB, mV, mH) => ({
    marginBottom: mB,
    marginTop: mT,
    marginLeft: mL,
    marginRight: mR,
    marginVertical: mV,
    marginHorizontal: mH,
  }),
});
