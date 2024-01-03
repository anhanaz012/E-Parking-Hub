import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SVG } from '../../../../assets/svg';
import {
  COLORS,
  Fonts,
  HEIGHT,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { ERRORS } from '../../../../labels/error';
import { Toast } from '../../../../utils/native';
import { styles } from './styles';

const VendorProfile = ({navigation}) => {
  const [vendorData, setVendorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getLoginToken = async () => {
      try {
        const token = await AsyncStorage.getItem('vendorLoginToken');
        if (token !== null) {
          setIsLoading(true);
          const user = await firestore().collection('Vendors').doc(token).get();
          if (user) {
            setVendorData(user.data());
            setIsLoading(false);
          } else {
            setIsLoading(false);
            Toast(ERRORS.gettingDataError);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getLoginToken();
  }, []);
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('AuthStack', {
          screen: 'IntroScreen',
        });
      });
  };
  const theme = 'light';
  const style = styles;
  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      {isLoading && <ModalBox isVisible={isLoading} />}
      {vendorData && (
        <>
          <AppHeader
            theme={theme}
            iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
            title={LABELS.profile}
            onLeftIconPress={() => {
              navigation.goBack();
            }}
            mL={15}
          />
          <Space mT={20} />
          <View style={[STYLES.pH(HORIZON_MARGIN)]}>
            <AppText
              title={LABELS.personalInfo}
              theme={theme}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'h3'}
            />
            <Space mT={20} />
            <View style={style.infoContainer}>
              <Icon
                SVGIcon={
                  <SVG.user fill={COLORS.light.grey} height={15} width={15} />
                }
              />
              <Space mL={15} />
              <AppText
                title={vendorData?.fullName}
                theme={theme}
                color={COLORS.light.grey}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </View>
            <View style={style.infoContainer}>
              <Icon
                SVGIcon={
                  <SVG.phone fill={COLORS.light.grey} height={15} width={15} />
                }
              />
              <Space mL={15} />
              <AppText
                title={`+92 ${vendorData?.phone}`}
                theme={theme}
                color={COLORS.light.grey}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </View>
            <View style={style.logoutContainer}>
              <Icon
                SVGIcon={
                  <SVG.at fill={COLORS.light.grey} height={15} width={15} />
                }
              />
              <Space mL={15} />
              <AppText
                title={vendorData?.email}
                theme={theme}
                color={COLORS.light.grey}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </View>
            <Space mT={30} />
            <AppText
              title={LABELS.spaceDetails}
              theme={theme}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'h3'}
            />
            <Space mT={20} />
            <View style={style.infoContainer}>
              <Icon
                SVGIcon={
                  <SVG.home fill={COLORS.light.grey} height={20} width={20} />
                }
              />
              <Space mL={15} />
              <AppText
                title={vendorData?.formValues.spaceName}
                theme={theme}
                color={COLORS.light.grey}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </View>
            <View style={style.infoContainer}>
              <Icon
                SVGIcon={
                  <SVG.carNumber
                    fill={COLORS.light.grey}
                    height={20}
                    width={20}
                  />
                }
              />
              <Space mL={15} />
              <AppText
                title={vendorData?.formValues.address}
                theme={theme}
                color={COLORS.light.grey}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </View>
            <TouchableOpacity
              style={style.logoutContainer}
              onPress={logoutHandler}>
              <Icon
                SVGIcon={<SVG.logout fill={'red'} height={20} width={20} />}
              />
              <Space mL={15} />
              <AppText
                title={LABELS.logout}
                theme={theme}
                color={'red'}
                fontFamily={Fonts.latoRegular}
                variant={'h4'}
              />
            </TouchableOpacity>
          </View>
        </>
       )} 
    </ScrollView>
  );
};

export default VendorProfile;
