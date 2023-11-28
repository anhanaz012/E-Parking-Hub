import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/Auth/SignUp/SignUpScreen';
import SignInScreen from '../screens/Auth/Signin/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Auth/SplashScreen/SplashScreen';
import IntroScreen from '../screens/Auth/IntroScreen/IntroScreen';
const Stack = createStackNavigator();
const AppNavigator = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1500);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : (
          <></>
        )}
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
