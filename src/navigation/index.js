import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import ForgotPassScreen from '../screens/Auth/ForgotPassword/ForgotPassScreen';
import IntroScreen from '../screens/Auth/IntroScreen/IntroScreen';
import SignUpScreen from '../screens/Auth/SignUp/SignUpScreen';
import SignInScreen from '../screens/Auth/Signin/SignInScreen';
import SplashScreen from '../screens/Auth/SplashScreen/SplashScreen';
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
        <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
