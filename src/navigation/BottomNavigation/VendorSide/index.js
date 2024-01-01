import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SVG } from '../../../assets/svg';
import { COLORS } from '../../../assets/theme';
import Icon from '../../../components/Icon/Icon';
import VendorBookings from '../../../screens/Main/VendorSide/VendorBookings/VendorBookings';
import VendorHome from '../../../screens/Main/VendorSide/VendorHome/VendorHome';
import VendorProfile from '../../../screens/Main/VendorSide/VendorProfile/VendorProfile';
import { styles } from './styles';
const Tab = createBottomTabNavigator();
const VendorBottomNavigation = ({navigation}) => {
  const style = styles;
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
        component={VendorHome}
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
                  navigation.navigate('HomeScreen');
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="MyBooking"
        component={VendorBookings}
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
                  navigation.navigate('MyBookingScreen');
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={VendorProfile}
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
                  navigation.navigate('UserProfileScreen');
                }}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default VendorBottomNavigation;
