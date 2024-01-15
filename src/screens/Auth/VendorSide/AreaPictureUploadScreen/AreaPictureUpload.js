import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useEffect, useState} from 'react';
import {BackHandler, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {SVG} from '../../../../assets/svg';
import {Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {Toast} from '../../../../utils/native';
import {styles} from './styles';
const AreaPictureUpload = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginToken, setLoginToken] = useState('');
  const style = styles;
  useEffect(() => {
    try {
      const getData = async () => {
        await AsyncStorage.getItem('vendorLoginToken')
          .then(value => {
            if (value) {
              setLoginToken(value);
            } else {
              Toast('Error in retrieving loginToken');
            }
          })
          .catch(e => {
            console.log(e);
          });
      };
      getData();
    } catch (e) {
      console.log(e);
    }
    const onBackPress = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
  const launchCameraHandler = async () => {
    launchCamera({}, async res => {
      if (res.didCancel) {
        Toast(ERRORS.cancelledImageUploading);
        setIsModalVisible(false);
      } else {
        try {
          setIsLoading(true);
          const filename = res.assets[0].fileName;
          const fileuri = res.assets[0].uri;
          const reference = storage().ref(`parkingAreas/${filename}`);
          await reference.putFile(fileuri);
          const downloadURL = await reference.getDownloadURL();
          setImageUrl(downloadURL);
          setIsLoading(false);
          Toast(LABELS.imageUploaded);
          setIsModalVisible(false);
        } catch (error) {
          console.error('Error uploading image:', error);
          setIsLoading(false);
          Toast(ERRORS.somethingWent);
        }
      }
    });
  };
  const chooseFromGalleryHandler = async () => {
    launchImageLibrary({}, async res => {
      if (res.didCancel) {
        Toast(ERRORS.cancelledImageUploading);
        setIsModalVisible(false);
      } else {
        try {
          setIsLoading(true);
          const filename = res.assets[0].fileName;
          const fileuri = res.assets[0].uri;
          const reference = storage().ref(`parkingAreas/${filename}`);
          await reference.putFile(fileuri);
          const downloadURL = await reference.getDownloadURL();
          setImageUrl(downloadURL);
          setIsLoading(false);
          Toast(LABELS.imageUploaded);
          setIsModalVisible(false);
        } catch (error) {
          console.error('Error uploading image:', error);
          setIsLoading(false);
          Toast(ERRORS.somethingWent);
        }
      }
    });
  };
  const imageUploadingHandler = async () => {
    if (imageUrl && loginToken) {
      setIsLoading(true);
      await firestore().collection('AllUsers').doc(loginToken).update({
        image: imageUrl,
      });
      await firestore().collection('Vendors').doc(loginToken).update({
        image: imageUrl,
      });
      await firestore().collection('ParkingAreas').doc(loginToken).update({
        image: imageUrl,
      });
      setIsLoading(false);
      navigation.navigate('VendorAuthStack', {screen: 'AreaLayout'});
    } else {
      Toast(ERRORS.uploadImage);
    }
  };
  return (
    <View style={[STYLES.flex1]}>
      <AppHeader
        title={'Step 2 of 3'}
        theme={'light'}
        iconLeft={<SVG.leftArrow height={20} width={20} fill={'black'} />}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
      {isLoading && <ModalBox isVisible={isLoading} />}
      <Space mT={50} />
      <TouchableOpacity
        style={style.profileContainer}
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <View style={style.dottedContainer}>
          <Icon SVGIcon={<SVG.camera height={40} width={40} />} />
          <Space mT={20} />
          <AppText
            title={LABELS.uploadProfile}
            fontFamily={Fonts.latoRegular}
            variant={'h5'}
          />
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={[STYLES.pH(15)]}>
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: '#F7F7F7',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              borderBottomColor: 'lightgray',
              borderBottomWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={launchCameraHandler}>
            <AppText
              title={LABELS.takePhoto}
              fontFamily={Fonts.latoRegular}
              color={'purple'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={chooseFromGalleryHandler}>
            <AppText
              title={LABELS.chooseFromGallery}
              fontFamily={Fonts.latoRegular}
              color={'purple'}
            />
          </TouchableOpacity>
        </View>
        <Space mT={20} />
        <AppButton
          title={LABELS.cancel}
          extraStyle={{
            btnContainer: {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'white',
            },
          }}
          onPress={() => {
            setIsModalVisible(false);
          }}
        />
      </Modal>
      <Space mT={50} />
      <View style={[STYLES.pH('10%')]}>
        <GradientButton
          title={LABELS.continue}
          textColor={'white'}
          onPress={imageUploadingHandler}
        />
      </View>
    </View>
  );
};

export default AreaPictureUpload;
