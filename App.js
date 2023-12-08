import React from 'react';
import AppNavigator from './src/navigation';
import BottomNavigation from './src/navigation/BottomNavigation/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
