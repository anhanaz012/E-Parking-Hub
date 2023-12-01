import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import SplashScreen from '../screens/Auth/UserSide/SplashScreen/SplashScreen';
import IntroScreen from '../screens/Auth/UserSide/IntroScreen/IntroScreen';
import SignUpScreen from '../screens/Auth/UserSide/SignUp/SignUpScreen';
import SignInScreen from '../screens/Auth/UserSide/Signin/SignInScreen';
import ForgotPassScreen from '../screens/Auth/UserSide/ForgotPassword/ForgotPassScreen';
import OTPScreen from '../screens/Auth/UserSide/OTPScreen/OTPScreen';
import CreateNewPassScreen from '../screens/Auth/UserSide/CreateNewPassScreen/CreateNewPassScreen';
import HomeScreen from '../screens/Main/UserSide/HomeScreen/HomeScreen';
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
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen
          name="CreateNewPassScreen"
          component={CreateNewPassScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
