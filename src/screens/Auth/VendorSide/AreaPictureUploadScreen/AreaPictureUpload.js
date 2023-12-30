import storage from '@react-native-firebase/storage';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
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
import firestore from '@react-native-firebase/firestore';
import {Toast} from '../../../../utils/native';
import {styles} from './styles';
const AreaPictureUpload = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loginToken = useSelector(state => state.auth.loginToken);
  const style = styles;
  const launchCameraHandler = async () => {
    launchCamera({}, async res => {
      setIsLoading(true);

      if (res.didCancel) {
        setIsLoading(false);
        setIsModalVisible(false);
        Toast(ERRORS.cancelledImageUploading);
      } else {
        let filename = res.assets[0].fileName;
        let fileuri = res.assets[0].uri;
        const reference = storage().ref(`parkingAreas/${filename}`);
        await reference.putFile(fileuri);
        await storage()
          .ref(`parkingAreas/${filename}`)
          .getDownloadURL()
          .then(uri => {
            let imageUri = uri;
            setImageUrl(imageUri);
            setIsLoading(false);
            Toast(LABELS.imageUploaded);
            setIsModalVisible(false);
          })
          .catch(err => {
            Toast(ERRORS.somethingWent);
          });
      }
    });
  };
  const chooseFromGalleryHandler = async () => {
    launchImageLibrary({}, async res => {
      setIsLoading(true);
      if (res.didCancel) {
        setIsLoading(false);
        setIsModalVisible(false);
        Toast(ERRORS.cancelledImageUploading);
      } else {
        let filename = res.assets[0].fileName;
        let fileuri = res.assets[0].uri;
        const reference = storage().ref(`parkingAreas/${filename}`);
        await reference.putFile(fileuri);
        await storage()
          .ref(`parkingAreas/${filename}`)
          .getDownloadURL()
          .then(uri => {
            let imageUri = uri;
            setImageUrl(imageUri);
            setIsLoading(false);
            Toast(LABELS.imageUploaded);
            setIsModalVisible(false);
          })
          .catch(err => {
            Toast(ERRORS.somethingWent);
          });
      }
    });
  };
  const imageUploadingHandler = async () => {
    setIsLoading(true);
    if (imageUrl) {
      await firestore().collection('AllUsers').doc(loginToken).update({
        image: imageUrl,
      });
      await firestore()
        .collection('Vendors')
        .doc(loginToken)
        .update({
          image: imageUrl,
        })
        .then(() => {
          setIsLoading(false);
          navigation.navigate('VendorBottomNavigation');
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    } else {
      setIsLoading(false);
      console.log('url not present');
    }
  };
  return (
    <View style={[STYLES.flex1]}>
      <AppHeader
        title={LABELS.uploadProfile}
        theme={'light'}
        iconLeft={<SVG.leftArrow height={20} width={20} fill={'black'} />}
        mL={15}
      />
      <Space mT={50} />
      {isLoading && <ModalBox isVisible={isLoading} />}
      <TouchableOpacity
        style={style.profileContainer}
        onPress={() => {
          setIsModalVisible(true);
        }}>
        <View style={style.dottedContainer}>
          <Icon SVGIcon={<SVG.camera height={40} width={40} />} />
          <Space mT={20} />
          <AppText title={LABELS.upload} fontFamily={Fonts.latoRegular} />
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
          title={LABELS.upload}
          textColor={'white'}
          onPress={imageUploadingHandler}
        />
      </View>
    </View>
  );
};

export default AreaPictureUpload;
