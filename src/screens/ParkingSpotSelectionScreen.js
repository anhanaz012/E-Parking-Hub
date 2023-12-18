// // import React from 'react';
// // import {ScrollView, Text, View} from 'react-native';
// // import {COLORS, STYLES} from '../assets/theme';
// // import AppHeader from '../components/AppHeader/AppHeader';
// // import {SVG} from '../assets/svg';
// // import {styles} from './styles';

// // const ParkingSpotSelectionScreen = () => {
// //   const style = styles();
// // const vendorDummyData = {
// //   numRows: '4',
// //   numSpots: '20',
// //   address: '123 Parking Street',
// //   latitude: '40.7128',
// //   longitude: '-74.0060',
// //   entryPoint: 'center',
// //   exitPoint: 'center',
// //   routesPosition: 'horizontal',
// //   rowsPosition: 'staggered',
// //   vendorName: 'ABC Parking Services',
// //   contactPerson: 'John Doe',
// //   contactNumber: '123-456-7890',
// //   email: 'john.doe@example.com',
// //   hourlyRate: '5.00',
// //   currency: 'USD',
// // };
// //   const theme = 'light';
// //   return (
// //     <ScrollView style={[STYLES.flex1]}>
// //       <AppHeader
// //         iconLeft={
// //           <SVG.leftArrow fill={COLORS.dark.black} height={20} width={20} />
// //         }
// //         mL={15}
// //         theme={theme}
// //         title={'Choose Parking Spot'}
// //       />
// //       <View style={style.container}></View>
// //     </ScrollView>
// //   );
// // };

// // export default ParkingSpotSelectionScreen;

// // import React, {useState, useEffect} from 'react';
// // import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// // import ParkingSpot from './ParkingSpot';
// // import {getRoutes, getEntryExitPoints} from '../utils/native';
// // import {IMAGES} from '../assets/images';

// // const ParkingSpotSelectionScreen = ({vendorData}) => {
// //   const [selectedSpot, setSelectedSpot] = useState(null);
// //   const [parkingSpots, setParkingSpots] = useState([]);
// //   const entryExitPoints = getEntryExitPoints(vendorData);

// //   useEffect(() => {
// //     // Fetch parking spot data from the vendor's database
// //     const fetchedData = Array.from(
// //       {length: parseInt(vendorData.numSpots)},
// //       (_, index) => ({
// //         id: index + 1,
// //         status: 'available', // Replace with actual status from the database
// //       }),
// //     );

// //     setParkingSpots(fetchedData);
// //   }, [vendorData]);

// //   const handleSpotSelection = spot => {
// //     setSelectedSpot(spot);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {getRoutes(vendorData).map((route, index) => (
// //         <Image
// //           key={`route-${index}`}
// //           source={IMAGES.carSlot1}
// //           style={[styles.arrow, {transform: getArrowTransform(route)}]}
// //         />
// //       ))}
// //       {entryExitPoints.map((point, index) => (
// //         <Image
// //           key={`entry-exit-${index}`}
// //           source={IMAGES.carSlot1}
// //           style={[
// //             styles.entryExitPoint,
// //             {
// //               top: point === 'entry' ? 0 : 'auto',
// //               bottom: point === 'exit' ? 0 : 'auto',
// //             },
// //           ]}
// //         />
// //       ))}
// //       {parkingSpots.map(spot => (
// //         <ParkingSpot
// //           key={spot.id}
// //           spot={spot}
// //           isSelected={selectedSpot && selectedSpot.id === spot.id}
// //           onPress={() => handleSpotSelection(spot)}
// //         />
// //       ))}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   arrow: {
// //     position: 'absolute',
// //     resizeMode: 'contain',
// //     zIndex: 1,
// //     // Add styles for route arrows as needed
// //   },
// //   entryExitPoint: {
// //     position: 'absolute',
// //     width: 20,
// //     height: 20,
// //     resizeMode: 'contain',
// //     zIndex: 2,
// //   },
// // });

// // const getArrowTransform = route => {
// //   if (route.direction === 'horizontal') {
// //     return route.row % 2 === 0 ? [{rotate: '180deg'}] : [];
// //   } else {
// //     return route.col % 2 !== 0 ? [{rotate: '90deg'}] : [];
// //   }
// // };

// // export default ParkingSpotSelectionScreen;

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import ParkingSpot from './ParkingSpot';
// import { getRoutes, getEntryExitPoints } from '../utils/native';
// import { IMAGES } from '../assets/images';

// const ParkingSpotSelectionScreen = ({ vendorData }) => {
//   const [selectedSpot, setSelectedSpot] = useState(null);
//   const [parkingSpots, setParkingSpots] = useState([]);
//   const entryExitPoints = getEntryExitPoints(vendorData);

//   useEffect(() => {
//     // Fetch parking spot data from the vendor's database
//     const fetchedData = Array.from(
//       { length: parseInt(vendorData.numSpots) },
//       (_, index) => ({
//         id: index + 1,
//         status: 'available', // Replace with actual status from the database
//       })
//     );

//     setParkingSpots(fetchedData);
//   }, [vendorData]);

//   const handleSpotSelection = (spot) => {
//     setSelectedSpot(spot);
//   };

//   return (
//     <View style={styles.container}>
//       {getRoutes(vendorData).map((route, index) => (
//         <Image
//           key={`route-${index}`}
//           source={IMAGES.carSlot1} // Replace with the appropriate image for routes
//           style={[styles.arrow, { transform: getArrowTransform(route) }]}
//         />
//       ))}
//       {entryExitPoints.map((point, index) => (
//         <Image
//           key={`entry-exit-${index}`}
//           source={IMAGES.carSlot1} // Replace with the appropriate image for entry/exit points
//           style={[
//             styles.entryExitPoint,
//             {
//               top: point === 'entry' ? 0 : 'auto',
//               bottom: point === 'exit' ? 0 : 'auto',
//             },
//           ]}
//         />
//       ))}
//       {parkingSpots.map((spot) => (
//         <ParkingSpot
//           key={spot.id}
//           spot={spot}
//           isSelected={selectedSpot && selectedSpot.id === spot.id}
//           onPress={() => handleSpotSelection(spot)}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   arrow: {
//     position: 'absolute',
//     resizeMode: 'contain',
//     zIndex: 1,
//     // Add styles for route arrows as needed
//   },
//   entryExitPoint: {
//     position: 'absolute',
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     zIndex: 2,
//   },
// });

// const getArrowTransform = (route) => {
//   if (route.direction === 'horizontal') {
//     return route.row % 2 === 0 ? [{ rotate: '180deg' }] : [];
//   } else {
//     return route.col % 2 !== 0 ? [{ rotate: '90deg' }] : [];
//   }
// };

// export default ParkingSpotSelectionScreen;

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Picker,
} from 'react-native';
import {IMAGES} from '../assets/images';

const ChooseParkingSpotScreen = ({vendorData}) => {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [parkingSpots, setParkingSpots] = useState([]);

  useEffect(() => {
    const generatedSpots = generateParkingSpots(
      vendorData.numRows,
      vendorData.numSpots,
    );
    setParkingSpots(generatedSpots);
  }, [vendorData]);

  const generateParkingSpots = (numRows, numSpots) => {
    const spots = [];
    let spotCount = 1;

    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numSpots / numRows; col++) {
        spots.push({
          id: spotCount++,
          row,
          col,
          status: 'booked', // Replace with actual status from the database
        });
      }
    }

    return spots;
  };

  const handleSpotSelection = spot => {
    setSelectedSpot(spot);
  };

  const getStatusColor = status => {
    switch (status) {
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

  const renderRoutes = () => {
    if (vendorData.routesPosition === 'horizontal') {
      return (
        <Image
          source={IMAGES.cancel}
          style={styles.routes}
        />
      );
    } else {
      return (
        <Image
          source={IMAGES.carSlot1}
          style={styles.routes}
        />
      );
    }
  };

  const renderEntryExitPoints = () => {
    const entryExitPoints = getEntryExitPoints(vendorData);
    return entryExitPoints.map((point, index) => (
      <Image
        key={`entry-exit-${index}`}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNTGgrCAm8WrkAskejswf-f9gsW39Y-MDGQ&usqp=CAU',
        }}
        style={[
          styles.entryExitPoint,
          {
            top: point === 'entry' ? 0 : 'auto',
            bottom: point === 'exit' ? 0 : 'auto',
            left: point === 'center' ? '50%' : point === 'top' ? '20%' : 'auto', // Adjust based on the design
          },
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {renderRoutes()}
      {renderEntryExitPoints()}
      {parkingSpots.map(spot => (
        <TouchableOpacity
          key={spot.id}
          style={[
            styles.parkingSpot,
            {
              backgroundColor:
                selectedSpot && selectedSpot.id === spot.id
                  ? 'blue'
                  : getStatusColor(spot.status),
            },
          ]}
          onPress={() => handleSpotSelection(spot)}>
          {spot.status === 'booked' && (
            <Image source={IMAGES.carSlot1} style={styles.carImage} />
          )}
          <Text style={styles.spotNumber}>{spot.id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 16,
  },
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
  routes: {
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1,
    // Adjust styles for route images as needed
  },
  entryExitPoint: {
    position: 'absolute',
    width: 20,
    height: 20,
    resizeMode: 'contain',
    zIndex: 2,
    // Adjust styles for entry/exit point images as needed
  },
});

const getEntryExitPoints = vendorData => {
  const entryPoint = vendorData.entryPoint.toLowerCase();
  const exitPoint = vendorData.exitPoint.toLowerCase();

  return [entryPoint, exitPoint];
};

export default ChooseParkingSpotScreen;
