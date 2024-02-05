import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IMAGES } from '../../../../assets/images';
import { SVG } from '../../../../assets/svg';
import { COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';
const DisplayDirectionsScreen = ({navigation}) => {
  const style = styles;
  const areaDetails = useSelector(state => state.booking.selectedArea);
  const [address, setAddress] = useState('');
  const [entryExitDirections, setEntryExitDirections] = useState('');
  useEffect(() => {
    const getVendorSpaceDetails = async () => {
      const vendorToken = areaDetails.vendorToken;
      const vendor = await firestore()
        .collection('Vendors')
        .doc(vendorToken)
        .get();
      const entryExitDirection = vendor.data().formValues.entryExitDirection;
      const areaAddress = vendor.data().formValues.address;
      setEntryExitDirections(entryExitDirection);
      setAddress(areaAddress);
    };
    getVendorSpaceDetails();
  }, []);
  return (
    <ImageBackground source={IMAGES.imageHome} style={style.background}>
      <View style={style.container}>
        <AppHeader
          title={'Parking Slot Directions'}
          theme={'dark'}
          iconLeft={<SVG.leftArrow fill={'white'} height={20} width={20} />}
          mL={15}
          extraStyle={{
            container: {
              position: 'absolute',
              top: 0,
            },
          }}
          onLeftIconPress={() => {
            navigation.goBack();
          }}
        />
        <Space mT={100} />
        <View>
          <AppText
            color={'#9966CC'}
            title={LABELS.directionsHeading}
            variant={'h1'}
            fontFamily={Fonts.merriWeatherBold}
          />
          <Space mT={30} />
          <AppText
            title={`1. Head towards the ${entryExitDirections} entrance.`}
            color={'white'}
            fontFamily={Fonts.latoRegular}
            variant={'body1'}
            extraStyle={[STYLES.fontSize(16)]}
          />
          <Space mT={20} />
          <AppText
            title={`2. Drive to Row ${areaDetails.slotDetails.row}`}
            color={'white'}
            fontFamily={Fonts.latoRegular}
            variant={'body1'}
            extraStyle={[STYLES.fontSize(16)]}
          />
          <Space mT={20} />
          <AppText
            title={`3. Turn right to Column ${areaDetails.slotDetails.row}`}
            color={'white'}
            fontFamily={Fonts.latoRegular}
            extraStyle={[STYLES.fontSize(16)]}
            variant={'body1'}
          />
          <Space mT={20} />
          <AppText
            title={'4. Find your parking spot.'}
            color={'white'}
            fontFamily={Fonts.latoRegular}
            variant={'body1'}
            extraStyle={[STYLES.fontSize(16)]}
          />
          <Space mT={20} />
          <AppText
            title={` Please note the address: ${address}`}
            color={'white'}
            fontFamily={Fonts.mavenRegular}
          />
          <Space mT={50} />
          <AppText
            title={LABELS.thanksLetter}
            color={COLORS.light.OTPInput}
            variant={'h3'}
            fontFamily={Fonts.merriWeatherSansRegular}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default DisplayDirectionsScreen;
