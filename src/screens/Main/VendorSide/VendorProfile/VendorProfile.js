import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { SVG } from '../../../../assets/svg';
import {
  COLORS,
  Fonts,
  HEIGHT,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { ERRORS } from '../../../../labels/error';
import { Toast } from '../../../../utils/native';
import { styles } from './styles';

const VendorProfile = ({navigation}) => {
  const [vendorData, setVendorData] = useState(null);
  const [EditPriceModalShow, setEditPriceModalShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [newPrice, setNewPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = 'light';
  const style = styles;
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    const getLoginToken = async () => {
      try {
        const token = await AsyncStorage.getItem('vendorLoginToken');
        if (token !== null) {
          setIsLoading(true);
          const unsubscribe = firestore()
            .collection('Vendors')
            .doc(token)
            .onSnapshot(
              querySnapshot => {
                setVendorData(querySnapshot.data());
                setIsLoading(false);
              },
              error => {
                setIsLoading(false);
                console.error(ERRORS.gettingDataError);
              },
            );
          return () => {
            unsubscribe();
          };
        }
      } catch (e) {
        console.log(e);
      }
    };
    getLoginToken();
    const getRealTimeChanges = () => {};
    getRealTimeChanges();
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
  const saveNewPriceHandler = () => {
    const previousPrice = vendorData?.formValues?.price;
    const vendorLoginToken = vendorData?.token;
    if (newPrice == '') {
      Toast('Please enter new price');
    } else {
      setIsLoading(true);
      firestore()
        .collection('Vendors')
        .doc(vendorLoginToken)
        .update({
          'formValues.price': newPrice,
        })
        .then(() => {
          firestore().collection('ParkingAreas').doc(vendorLoginToken).update({
            'formValues.price': newPrice,
          });
          setIsLoading(false);
          Toast('Price updated successfully');
          setEditPriceModalShow(false);
        });
    }
  };
  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      <Modal isVisible={EditPriceModalShow} style={[STYLES.flex1]}>
        <View
          style={[
            STYLES.rowCenterBt,
            STYLES.width100,
            STYLES.height(50),
            STYLES.AICenter,
            STYLES.bgColor('white'),
            STYLES.pH(HORIZON_MARGIN),
          ]}>
          <View style={[STYLES.width('50%')]}>
            <AppText
              title={'Edit Area Price'}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'h3'}
            />
          </View>
          <View style={[STYLES.width('50%'), STYLES.JCEnd, STYLES.row]}>
            <Icon
              SVGIcon={<SVG.cancel fill={'black'} height={20} width={20} />}
              onPress={() => {
                setEditPriceModalShow(false);
              }}
            />
          </View>
        </View>
        <View style={style.editModalContainer}>
          <AppInput
            onFocus={handleFocus}
            placeholder={LABELS.enterNewPrice}
            onBlur={handleBlur}
            isFocused={isFocused}
            onChangeText={value => {
              setNewPrice(value);
            }}
            keyboardType={'numeric'}
            theme={'light'}
            extraStyle={{
              textInputContainer: {
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'transparent',
                paddingHorizontal: 15,
                borderRadius: 0,
                borderColor: isFocused ? COLORS.light.primary : 'grey',
                borderWidth: 0,
                borderBottomWidth: 1,
              },
              textInput: {
                height: 50,
                width: '100%',
                color: 'black',
                fontSize: 13,
                padding: 0,
                fontFamily: Fonts.latoRegular,
              },
            }}
          />
          <Space mT={40} />
          <GradientButton
            title={'Save'}
            textColor={'white'}
            onPress={saveNewPriceHandler}
          />
        </View>
      </Modal>
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
            <View style={style.infoContainer}>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Icon
                  SVGIcon={
                    <SVG.rupee
                      fill={COLORS.light.grey}
                      height={18}
                      width={18}
                    />
                  }
                />
                <Space mL={15} />
                <AppText
                  title={`${vendorData?.formValues.price}/hr`}
                  theme={theme}
                  color={COLORS.light.grey}
                  fontFamily={Fonts.latoRegular}
                  variant={'h4'}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <AppText
                  title={'Edit'}
                  fontFamily={Fonts.latoRegular}
                  variant={'body2'}
                  color={COLORS.light.primary}
                  extraStyle={[STYLES.textDecorationLine('underline')]}
                  onPress={() => {
                    setEditPriceModalShow(true);
                  }}
                />
                <Space mL={10} />
              </View>
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
