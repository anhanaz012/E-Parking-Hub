import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { IMAGES } from '../assets/images';

const ParkingSpot = ({ spot, isSelected, onPress }) => {
  const getStatusColor = () => {
    switch (spot.status) {
      case 'available':
        return 'green';
      case 'booked':
        return 'orange';
      case 'unavailable':
        return 'gray';
      default:
        return 'white';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.parkingSpot,
        { backgroundColor: isSelected ? 'blue' : getStatusColor() },
      ]}
      onPress={onPress}
    >
      {spot.status === 'booked' && (
        <Image source={IMAGES.Car} style={styles.carImage} />
      )}
      <Text style={styles.spotNumber}>{spot.id}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parkingSpot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
  },
  spotNumber: {
    color: 'white',
    fontWeight: 'bold',
  },
  carImage: {
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 2,
  },
});

export default ParkingSpot;



