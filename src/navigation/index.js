import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import ForgotPassScreen from '../screens/Auth/UserSide/ForgotPassword/ForgotPassScreen';
import IntroScreen from '../screens/Auth/UserSide/IntroScreen/IntroScreen';
import SignUpScreen from '../screens/Auth/UserSide/SignUp/SignUpScreen';
import SignInScreen from '../screens/Auth/UserSide/Signin/SignInScreen';
import SplashScreen from '../screens/Auth/UserSide/SplashScreen/SplashScreen';
import AreaLayoutScreen from '../screens/Auth/VendorSide/AreaLayoutScreen/AreaLayoutScreen';
import AreaPictureUpload from '../screens/Auth/VendorSide/AreaPictureUploadScreen/AreaPictureUpload';
import SpaceDetailsScreen from '../screens/Auth/VendorSide/SpaceDetailsScreen/SpaceDetailsScreen';
import VendorForgotPass from '../screens/Auth/VendorSide/VendorForgotPass/VendorForgotPass';
import VendorSignUp from '../screens/Auth/VendorSide/VendorSignUp/VendorSignUp';
import VendorSignIn from '../screens/Auth/VendorSide/VendorSignin/VendorSignin';
import AddFeedbackScreen from '../screens/Main/UserSide/AddFeedbackScreen/AddFeedbackScreen';
import AreasListScreens from '../screens/Main/UserSide/AreasListScreen/AreasListScreens';
import FeeCalculationScreen from '../screens/Main/UserSide/FeeCalculationScreen/FeeCalculationScreen';
import HomeScreen from '../screens/Main/UserSide/HomeScreen/HomeScreen';
import MyBookingScreen from '../screens/Main/UserSide/MyBookingScreen/MyBookingScreen';
import NotificationScreen from '../screens/Main/UserSide/NotificationScreen/NotificationScreen';
import PaymentScreen from '../screens/Main/UserSide/PaymentScreen/PaymentScreen';
import SpotSelectionScreen from '../screens/Main/UserSide/SpotSelectionScreen/SpotSelectionScreen';
import UserProfileScreen from '../screens/Main/UserSide/UserProfileScreen/UserProfileScreen';
import BottomNavigation from './BottomNavigation/UserSide';
import VendorBottomNavigation from './BottomNavigation/VendorSide';
import DisplayDirectionsScreen from '../screens/Main/UserSide/DisplayDirectionScreen/DisplayDirectionScreen';
import CheckInScreen from '../screens/Main/UserSide/CheckInScreen/CheckInScreen';
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
      <Stack.Screen name="SpaceDetailsScreen" component={SpaceDetailsScreen} />
      <Stack.Screen name="AreaPictureUpload" component={AreaPictureUpload} />
      <Stack.Screen name="AreaLayout" component={AreaLayoutScreen} />
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
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen
        name="FeeCalculationScreen"
        component={FeeCalculationScreen}
      />
      <Stack.Screen name="AddFeedbackScreen" component={AddFeedbackScreen} />
      <Stack.Screen
        name="SpotSelectionScreen"
        component={SpotSelectionScreen}
      />
      <Stack.Screen
        name="DisplayDirectionsScreen"
        component={DisplayDirectionsScreen}
      />
       <Stack.Screen
        name="CheckInScreen"
        component={CheckInScreen}
      />
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
