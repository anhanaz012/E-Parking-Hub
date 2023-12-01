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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigation from './BottomNavigation/BottomNavigation';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const options = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen
        name="CreateNewPassScreen"
        component={CreateNewPassScreen}
      />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return <Stack.Screen name="HomeScreen" component={HomeScreen} />;
};
const RootNavigator = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 1500);
  }, []);
  return (
    <Stack.Navigator screenOptions={options}>
      {showSplashScreen ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <></>
      )}
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={options}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
