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
    {id: 6, name: 'B1', status: 'entry'},
    {id: 7, name: 'B2', status: 'exit'},
  ]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const handleSpotSelection = spot => {
    setSelectedSpot(spot);
  };

  const renderSpotItem = ({item}) => (
    // <TouchableOpacity
    //   style={[
    //     styles.spotItem,
    //     selectedSpot === item.id && styles.selectedSpotItem,
    //   ]}
    //   onPress={() => handleSpotSelection(item.id)}>
    //   {selectedSpot === item.id && (
    //     <AppLogo
    //       source={IMAGES.carSlot1}
    //       height={60}
    //       width={60}
    //       resizeMode={'contain'}
    //     />
    //   )}
    //   <Text style={styles.spotText}>{item.name}</Text>
    //   <Icon SVGIcon={<SVG.bell fill={'black'} />} />
    // </TouchableOpacity>

    <TouchableOpacity
      style={{
        height: 100,
        width: 75,
        backgroundColor: 'transparent',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'lightgrey',
        margin: 5,
      }}>
      {item.status === 'occupied' ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppLogo source={IMAGES.carSlot1} height={'70%'} width={'70%'} />
          <AppText
            title={item.name}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      ) : item.status === 'entry' ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            title={item.name}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      ) : item.status === 'exit' ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            title={item.name}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            title={item.name}
            variant={'body1'}
            color={'black'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      )}
    </TouchableOpacity>
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
        numColumns={4} // Adjust the number of columns as needed
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
          navigation.navigate('ConfirmParking', {selectedSpot});
        }}
        disabled={!selectedSpot}>
        <Text style={styles.buttonText}>Continue</Text>
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
    height: 150,
    width: 80,
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
