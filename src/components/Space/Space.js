import React from 'react';
import {styles} from './styles';
import { View } from 'react-native';

const Space = props => {
  const {
    mL = 0,
    mR = 0,
    mT = 0,
    mB = 0,
    mV = 0,
    mH = 0,
    children = null,
  } = props;
  const style = styles;
  return (
    <>
      <View style={style.container(mL, mR, mT, mB, mV, mH)}></View>
      {children && children}
    </>
  );
};

export default Space;
