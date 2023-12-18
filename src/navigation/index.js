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
import FeeCalculationScreen from '../screens/Main/UserSide/FeeCalculationScreen/FeeCalculationScreen';
import AddFeedbackScreen from '../screens/Main/UserSide/AddFeedbackScreen/AddFeedbackScreen';
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
      <Stack.Screen name="FeeCalculationScreen" component={FeeCalculationScreen} />
      <Stack.Screen name="AddFeedbackScreen" component={AddFeedbackScreen} />
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




// import React, {useState, useEffect} from 'react';
// import {View, Text, Button} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

// const AppNavigator = () => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     configureGoogleSignIn();
//     checkIfUserIsSignedIn();
//   }, []);

//   const configureGoogleSignIn = async () => {
//     await GoogleSignin.configure({
//       webClientId:
//         '151941535306-dcmm0fpercndqq07rdddbln4f4fsj8jk.apps.googleusercontent.com',
//     });
//   };

//   const checkIfUserIsSignedIn = async () => {
//     const currentUser = await GoogleSignin.getCurrentUser();

//     if (currentUser) {
//       setUser(currentUser);
//     }
//   };

//   const handleSignIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setUser(userInfo);
//       // You can also use the credential to sign in with Firebase
//       // const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
//       // await auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // User canceled the sign-in process
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // Operation (e.g., sign-in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // Play services not available or outdated on the device
//       } else {
//         // Some other error occurred
//         console.error('Google Sign-In Error:', error);
//       }
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       setUser(null);
//     } catch (error) {
//       console.error('Google Sign-Out Error:', error);
//     }
//   };

//   return (
//     <View>
//       {user ? (
//         <View>
//           <Text>Welcome, {user.user.name}!</Text>
//           <Button title="Sign Out" onPress={handleSignOut} />
//         </View>
//       ) : (
//         <Button title="Sign In with Google" onPress={handleSignIn} />
//       )}
//     </View>
//   );
// };

// export default AppNavigator;
