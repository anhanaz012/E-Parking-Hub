import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Main/UserSide/HomeScreen/HomeScreen';
import NotificationScreen from '../../screens/Main/UserSide/NotificationScreen/NotificationScreen';
import UserProfileScreen from '../../screens/Main/UserSide/UserProfileScreen/UserProfileScreen';
import AddFeedbackScreen from '../../screens/Main/UserSide/AddFeedbackScreen/AddFeedbackScreen';
import ChooseParkingSlot from '../../screens/Main/UserSide/ChooseParkingSlot/ChooseParkingSlot';
import PaymentScreen from '../../screens/Main/UserSide/PaymentScreen/PaymentScreen';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const options = {
    headerShown: false,
  };
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
      <Tab.Screen name="AddFeedback" component={AddFeedbackScreen} />
      <Tab.Screen name="ChooseParking" component={ChooseParkingSlot} />
      <Tab.Screen name="Payment" component={PaymentScreen} />

      
    </Tab.Navigator>
  );
};

export default BottomNavigation;
