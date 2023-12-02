import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {STYLES} from '../../../../assets/theme';

const HomeScreen = () => {
  const style = styles;
  return (
    <View style={[STYLES.flex1, STYLES.JCCenter, STYLES.AICenter]}>
      <Text>Google map will be displayed here...</Text>
    </View>
  );
};

export default HomeScreen;
