import React from 'react';
import {Text, Image} from 'react-native';
import {IMAGES} from '../../assets/images';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

const AppLogo = props => {
  const {
    height,
    width,
    uri,
    source,
    alignSelf,
    resizeMode,
    extraStyle = {},
  } = props;
  const style = styles(height, width, alignSelf);
  return (
    <>
      <FastImage
        style={[style.image, extraStyle]}
        source={uri ? {uri} : source}
        resizeMode={resizeMode}
      />
    </>
  );
};

export default AppLogo;
