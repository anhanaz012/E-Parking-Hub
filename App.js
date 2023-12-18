import React from 'react';
import AppNavigator from './src/navigation';
const App = () => {
  const vendorData = {
    numRows: '5',
    numSpots: '20',
    address: '123 Parking Street',
    latitude: '40.7128',
    longitude: '-74.0060',
    entryPoint: 'top',
    exitPoint: 'center',
    // routesPosition: 'horizontal',
    entryPoint: 'bottom',
    exitPoint: 'center',
    rowsPosition: 'staggered',
    vendorName: 'ABC Parking Services',
    contactPerson: 'John Doe',
    contactNumber: '123-456-7890',
    email: 'john.doe@example.com',
    hourlyRate: '5.00',
    currency: 'USD',
  };

  return (
    <>
      <AppNavigator />
    </>
  );
};
export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   point: {
//     position: 'absolute',
//     backgroundColor: 'blue',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   arrow: {
//     position: 'absolute',
//     bottom: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// App.js

// <View style={styles.container}>
//         {pathCoordinates.map((coordinate, index) => (
//           <View
//             key={index}
//             style={[styles.point, {left: coordinate.x, top: coordinate.y}]}>
//             <Text>{index + 1}</Text>
//           </View>
//         ))}
//         <View style={styles.arrow}>
//           <Text>⬇️</Text>
//         </View>
//       </View>

// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Text, ScrollView} from 'react-native';
// const App = () => {
//   const [totalParkingSlots, setTotalParkingSlots] = useState(0);
//   const [totalRows, setTotalRows] = useState(0);
//   const [entryPointPosition, setEntryPointPosition] = useState('top');
//   const [exitPointPosition, setExitPointPosition] = useState('bottom');
//   const [rowsPosition, setRowsPosition] = useState('vertical');
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     rowContainer: {
//       flexDirection: rowsPosition === 'vertical' ? 'column' : 'row',
//     },
//     parkingSlot: {
//       borderWidth: 1,
//       borderColor: 'black',
//       padding: 10,
//       margin: 5,
//     },
//   });
//   useEffect(() => {
//     // Fetch data from the vendor (replace this with your actual API call)
//     // For simplicity, I'll set some default values
//     const fetchDataFromVendor = async () => {
//       // Simulate API request delay
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Replace this with your actual API call
//       // For simplicity, setting default values
//       setTotalParkingSlots(20);
//       setTotalRows(6);
//     };

//     fetchDataFromVendor();
//   }, []);

//   const generateParkingLayout = () => {
//     const parkingLayout = [];

//     for (let row = 1; row <= totalRows; row++) {
//       const rowContainer = [];
//       for (let slot = 1; slot <= totalParkingSlots / totalRows; slot++) {
//         rowContainer.push(
//           <View key={`${row}-${slot}`} style={styles.parkingSlot}>
//             <Text>
//               {row}-{slot}
//             </Text>
//           </View>,
//         );
//       }
//       parkingLayout.push(
//         <View key={row} style={styles.rowContainer}>
//           {rowContainer}
//         </View>,
//       );
//     }

//     return parkingLayout;
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {generateParkingLayout()}
//         {/* Display other information like entry/exit points and routes here */}
//         <Text>Entry Point Position: {entryPointPosition}</Text>
//         <Text>Exit Point Position: {exitPointPosition}</Text>
//         <Text>Rows Position: {rowsPosition}</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default App;

// const pathCoordinates = [
//   {x: 50, y: 100},
//   {x: 150, y: 200},
//   {x: 250, y: 100},
//   // Add more coordinates as needed
// ];
