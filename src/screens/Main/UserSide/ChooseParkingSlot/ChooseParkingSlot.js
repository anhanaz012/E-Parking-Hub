import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {COMMON_COLORS, Fonts} from '../../../../assets/theme';
import AppText from '../../../../components/AppText/AppText';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import {IMAGES} from '../../../../assets/images';

const ChooseParkingSlot = ({navigation}) => {
  const theme = 'light';
  const [parkingSpots, setParkingSpots] = useState([
    {id: 1, name: 'A1', status: 'available'},
    {id: 2, name: 'A2', status: 'occupied'},
    {id: 3, name: 'A3', status: 'available'},
    {id: 4, name: 'A4', status: 'occupied'},
    {id: 5, name: 'A5', status: 'available'},
    {id: 6, name: 'A6', status: 'entry'},
    {id: 7, name: 'B1', status: 'exit'},
    {id: 8, name: 'B2', status: 'available'},
    {id: 9, name: 'B3', status: 'occupied'},
    {id: 10, name: 'B4', status: 'available'},
    {id: 11, name: 'B5', status: 'occupied'},
    {id: 12, name: 'B6', status: 'available'},
  ]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const handleSpotSelection = spot => {
    setSelectedSpot(spot);
  };
  const renderSpotItem = ({item}) => (
    <>
      <TouchableOpacity
        style={[
          styles.spotItem,
          selectedSpot === item.id && styles.selectedSpotItem,
        ]}
        onPress={() => handleSpotSelection(item.id)}>
        {selectedSpot === item.id && (
          <AppLogo
            source={IMAGES.carSlot1}
            height={60}
            width={60}
            resizeMode={'contain'}
          />
        )}
        <Text style={styles.spotText}>{item.name}</Text>
      </TouchableOpacity>
    </>
  );

  const displayDirections = () => {
    if (selectedSpot) {
      const directions = getDirectionsToSpot(selectedSpot);
      alert(directions); // Replace this with your logic to display directions
    }
  };

  const getDirectionsToSpot = spotId => {
    // Replace this with your logic to fetch directions based on the selected spot
    return `Follow the signs after entering the parking area to reach Spot ${spotId}.`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Parking Spot</Text>
      <FlatList
        data={parkingSpots}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSpotItem}
        numColumns={4}
        contentContainerStyle={styles.spotList}
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <Icon SVGIcon={<SVG.bell fill={'black'} />} />
          <Space mR={8} />
          <AppText
            title={LABELS.occupied}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <Space mR={5} />
        <View style={styles.legendItem}>
          <Icon SVGIcon={<SVG.bell fill={'black'} />} />
          <Space mR={8} />
          <AppText
            title={LABELS.entryPoint}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <View style={styles.legendItem}>
          <Icon SVGIcon={<SVG.bell fill={'black'} />} />
          <Space mR={8} />
          <AppText
            title={LABELS.exitPoint}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('HomeStack', {screen: 'ConfirmParkingScreen'});
        }}
        disabled={!selectedSpot}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate('HomeStack', {screen: 'ConfirmParkingScreen'});
          }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // paddingHorizontal:10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  spotList: {
    flexGrow: 1,
    width: 'auto',
    justifyContent: 'space-between',
  },
  spotItem: {
    aspectRatio: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
    height: 170,
    width: 65,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSpotItem: {
    backgroundColor: COMMON_COLORS.steelGrey,
  },
  carImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  spotText: {
    fontSize: 16,
    color: 'black',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: 'black',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  button: {
    marginTop: 16,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});

export default ChooseParkingSlot;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   FlatList,
// } from 'react-native';

// const ChooseParkingSlot = () => {
//   const vendorData = {
//     numRows: '4',
//     numSpots: '20',
//     address: '123 Parking Street',
//     latitude: '40.7128',
//     longitude: '-74.0060',
//     entryPoint: 'center',
//     exitPoint: 'center',
//     routesPosition: 'horizontal',
//     rowsPosition: 'staggered',
//     vendorName: 'ABC Parking Services',
//     contactPerson: 'John Doe',
//     contactNumber: '123-456-7890',
//     email: 'john.doe@example.com',
//     hourlyRate: '5.00',
//     currency: 'USD',
//   };
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedSpot, setSelectedSpot] = useState(null);
//   const [parkingSpots, setParkingSpots] = useState([]);

//   // Simulate fetching parking spots data from the vendor's database
//   useEffect(() => {
//     // Replace this with actual data fetching logic
//     const fetchedData = Array.from(
//       {length: parseInt(vendorData.numSpots)},
//       (_, index) => ({
//         id: index + 1,
//         status: 'available', // Replace with actual status from the database
//       }),
//     );

//     setParkingSpots(fetchedData);
//   }, [vendorData]);

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={[
//         styles.parkingSpot,
//         {backgroundColor: getStatusColor(item.status)},
//       ]}
//       onPress={() => handleSpotSelection(item)}>
//       <Text style={styles.spotNumber}>{item.id}</Text>
//     </TouchableOpacity>
//   );

//   const handleSpotSelection = spot => {
//     setSelectedSpot(spot);
//     setModalVisible(true);
//   };

//   const getStatusColor = status => {
//     switch (status) {
//       case 'available':
//         return 'green';
//       case 'booked':
//         return 'orange';
//       case 'unavailable':
//         return 'gray';
//       default:
//         return 'white';
//     }
//   };

//   const renderGridLines = () => {
//     const numRows = parseInt(vendorData.numRows);
//     const numCols = 4; // Adjust based on the actual layout
//     const routeColor = 'blue';

//     return (
//       <View style={styles.gridLinesContainer}>
//         {/* Horizontal Routes */}
//         {Array.from({length: numRows + 1}).map((_, index) => (
//           <View key={`h-route-${index}`} style={styles.horizontalRoute}>
//             <Text style={styles.routeText}>{`Row ${index + 1}`}</Text>
//           </View>
//         ))}

//         {/* Vertical Routes */}
//         {Array.from({length: numCols + 1}).map((_, index) => (
//           <View key={`v-route-${index}`} style={styles.verticalRoute}>
//             <Text style={styles.routeText}>{`Col ${index + 1}`}</Text>
//           </View>
//         ))}

//         {/* Entry Point */}
//         <View style={styles.entryExitPoint}>
//           <Text style={styles.routeText}>Entry Point</Text>
//         </View>

//         {/* Exit Point */}
//         <View style={styles.entryExitPoint}>
//           <Text style={styles.routeText}>Exit Point</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {renderGridLines()}

//       <FlatList
//         data={parkingSpots}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         numColumns={4} // Adjust based on the actual layout
//       />

//       <Modal animationType="slide" transparent={true} visible={modalVisible}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>
//               Parking Spot {selectedSpot?.id} - Status: {selectedSpot?.status}
//             </Text>
//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeButton}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   parkingSpot: {
//     width: 50,
//     height: 50,
//     margin:10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: 'white',
//   },
//   spotNumber: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   closeButton: {
//     color: 'blue',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   gridLinesContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   horizontalRoute: {
//     height: 1,
//     backgroundColor: 'blue',
//     width: '100%',
//     position: 'absolute',
//   },
//   verticalRoute: {
//     width: 1,
//     backgroundColor: 'blue',
//     height: '100%',
//     position: 'absolute',
//   },
//   routeText: {
//     color: 'blue',
//     fontSize: 10,
//   },
//   entryExitPoint: {
//     width: 20,
//     height: 20,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     position: 'absolute',
//   },
// });

// export default ChooseParkingSlot;
