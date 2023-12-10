import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {SVG} from '../../../assets/svg';
import {COLORS} from '../../../assets/theme';
import Icon from '../../../components/Icon/Icon';
import HomeScreen from '../../../screens/Main/UserSide/HomeScreen/HomeScreen';
import MyBookingScreen from '../../../screens/Main/UserSide/MyBookingScreen/MyBookingScreen';
import NotificationScreen from '../../../screens/Main/UserSide/NotificationScreen/NotificationScreen';
import UserProfileScreen from '../../../screens/Main/UserSide/UserProfileScreen/UserProfileScreen';
import {styles} from './styles';
const Tab = createBottomTabNavigator();
const BottomNavigation = ({navigation}) => {
  const focused = useIsFocused();
  const style = styles;
  const options = {
    headerShown: false,
  };
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: COLORS.dark.primary,
        tabBarInactiveTintColor: COLORS.dark.inputBorder,
        headerShown: false,
        tabBarItemStyle: {
          backgroundColor: 'white',
        },
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: [style.tabBarLabel],

          tabBarIcon: ({focused}) => (
            <>
              <Icon
                SVGIcon={
                  <SVG.home
                    fill={
                      focused ? COLORS.dark.primary : COLORS.dark.inputBorder
                    }
                    height={20}
                    width={20}
                  />
                }
                onPress={() => {
                  navigation.navigate('BottomNavigation', {screen: 'Home'});
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarLabelStyle: [style.tabBarLabel],

          tabBarIcon: ({focused}) => (
            <>
              <Icon
                SVGIcon={
                  <SVG.bell
                    fill={
                      focused ? COLORS.dark.primary : COLORS.dark.inputBorder
                    }
                    height={20}
                    width={20}
                  />
                }
                onPress={() => {
                  navigation.navigate('BottomNavigation', {
                    screen: 'Notifications',
                  });
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: [style.tabBarLabel],

          tabBarIcon: ({focused}) => (
            <>
              <Icon
                SVGIcon={
                  <SVG.user
                    fill={
                      focused ? COLORS.dark.primary : COLORS.dark.inputBorder
                    }
                    height={20}
                    width={20}
                  />
                }
                onPress={() => {
                  navigation.navigate('BottomNavigation', {screen: 'Profile'});
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="MyBooking"
        component={MyBookingScreen}
        options={{
          tabBarLabel: 'Bookings',
          tabBarLabelStyle: [style.tabBarLabel],

          tabBarIcon: ({focused}) => (
            <>
              <Icon
                SVGIcon={
                  <SVG.calender
                    fill={
                      focused ? COLORS.dark.primary : COLORS.dark.inputBorder
                    }
                    height={20}
                    width={20}
                  />
                }
                onPress={() => {
                  navigation.navigate('BottomNavigation', {
                    screen: 'MyBooking',
                  });
                }}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
