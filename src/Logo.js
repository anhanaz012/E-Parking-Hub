import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      {/* Car Icon */}
      <Svg height="50" width="50" viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="10" fill="#3498db" />
        <Path
          d="M7.5 17H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1.5L9 5h6l1.5 3H18a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.5L15 19H9l-1.5-3z"
          fill="#ffffff"
        />
      </Svg>

      {/* Map Pin Icon */}
      <Svg height="40" width="40" viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="10" fill="#f39c12" />
        <Text style={styles.mapText}>&#8594;</Text>
      </Svg>

      {/* User Icon */}
      <Svg height="30" width="30" viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="10" fill="#e74c3c" />
        <Text style={styles.userText}>&#128100;</Text>
      </Svg>

      {/* Logo Text */}
      <Text style={styles.logoText}>SmartPark Hub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -4,
  },
  userText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -3,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 10,
  },
});

export default Logo;
