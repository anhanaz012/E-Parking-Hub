import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './src/navigation/BottomNavigation/BottomNavigation';
import AppNavigator from './src/navigation';
import SignUpScreen from './src/screens/Auth/UserSide/SignUp/SignUpScreen';
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
