import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import CreateNewPassScreen from '../screens/Auth/UserSide/CreateNewPassScreen/CreateNewPassScreen';
import ForgotPassScreen from '../screens/Auth/UserSide/ForgotPassword/ForgotPassScreen';
import IntroScreen from '../screens/Auth/UserSide/IntroScreen/IntroScreen';
import OTPScreen from '../screens/Auth/UserSide/OTPScreen/OTPScreen';
import SignUpScreen from '../screens/Auth/UserSide/SignUp/SignUpScreen';
import SignInScreen from '../screens/Auth/UserSide/Signin/SignInScreen';
import SplashScreen from '../screens/Auth/UserSide/SplashScreen/SplashScreen';
import SpaceDetailsScreen from '../screens/Auth/VendorSide/SpaceDetailsScreen/SpaceDetailsScreen';
import VendorChangePass from '../screens/Auth/VendorSide/VendorChangePass/VendorChangePass';
import VendorForgotPass from '../screens/Auth/VendorSide/VendorForgotPass/VendorForgotPass';
import VendorOTP from '../screens/Auth/VendorSide/VendorOTP/VendorOTP';
import VendorSignUp from '../screens/Auth/VendorSide/VendorSignUp/VendorSignUp';
import VendorSignIn from '../screens/Auth/VendorSide/VendorSignin/VendorSignin';
import HomeScreen from '../screens/Main/UserSide/HomeScreen/HomeScreen';
import MyBookingScreen from '../screens/Main/UserSide/MyBookingScreen/MyBookingScreen';
import NotificationScreen from '../screens/Main/UserSide/NotificationScreen/NotificationScreen';
import UserProfileScreen from '../screens/Main/UserSide/UserProfileScreen/UserProfileScreen';
import BottomNavigation from './BottomNavigation/UserSide';
import VendorBottomNavigation from './BottomNavigation/VendorSide';
import AreasListScreens from '../screens/Main/UserSide/AreasListScreen/AreasListScreens';
import ChooseParkingSlot from '../screens/Main/UserSide/ChooseParkingSlot/ChooseParkingSlot';
import PaymentScreen from '../screens/Main/UserSide/PaymentScreen/PaymentScreen';
import ConfirmParkingScreen from '../screens/Main/UserSide/ConfirmParkingScreen/ConfirmParkingScreen';
const Stack = createStackNavigator();
const options = {
  headerShown: false,
};
const VendorAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="VendorSignUp" component={VendorSignUp} />
      <Stack.Screen name="VendorSignIn" component={VendorSignIn} />
      <Stack.Screen name="VendorForgotPass" component={VendorForgotPass} />
      <Stack.Screen name="VendorOTP" component={VendorOTP} />
      <Stack.Screen name="VendorChangePass" component={VendorChangePass} />
      <Stack.Screen name="SpaceDetailsScreen" component={SpaceDetailsScreen} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="MyBookingScreen" component={MyBookingScreen} />
      <Stack.Screen name="AreasListScreen" component={AreasListScreens} />
      <Stack.Screen name="ChooseParkingSlot" component={ChooseParkingSlot} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="ConfirmParkingScreen" component={ConfirmParkingScreen} />
    </Stack.Navigator>
  );
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
        <>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={options}
          />
          <Stack.Screen name="VendorAuthStack" component={VendorAuthStack} />
          <Stack.Screen
            name="VendorBottomNavigation"
            component={VendorBottomNavigation}
          />
        </>
      )}
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
