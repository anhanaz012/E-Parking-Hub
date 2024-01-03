import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { IMAGES } from '../../../../assets/images';
import { COLORS, COMMON_COLORS, Fonts, STYLES } from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { setLoginToken, setSpaceData } from '../../../../store/slices/authSlice';
import { styles } from './styles';
const IntroScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = 'light';
  const style = styles(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        setIsLoading(true);
        const userUid = user.uid;
        if (userUid) {
          const userDoc = await firebase
            .firestore()
            .collection('AllUsers')
            .doc(userUid)
            .get();
          if (userDoc.exists) {
            const userRole = userDoc.data().role;
            if (userRole === 'user') {
              try {
                await AsyncStorage.setItem('userLoginToken', userUid);
              } catch (err) {
                console.log(err);
              }
              setIsLoading(false);
              navigation.navigate('BottomNavigation');
            }
            if (userRole === 'vendor') {
              try {
                console.log(userUid);
                dispatch(setLoginToken(userUid));
                await AsyncStorage.setItem('vendorLoginToken', userUid);
              } catch (err) {
                console.log('err from asyncstorage', err);
              }
              const vendorData = await firebase
                .firestore()
                .collection('Vendors')
                .doc(userUid)
                .get();
              if (vendorData.exists) {
                const spotsData = vendorData.data().spots;
                const spaceValues = vendorData.data().formValues;
                const spaceImage = vendorData.data().image;
               
                if (spaceValues === undefined || spaceValues === null) {
                  navigation.navigate('VendorAuthStack', {
                    screen: 'SpaceDetailsScreen',
                  });
                } else if (spaceValues !== undefined && spaceValues !== null && !spaceImage) {
                  navigation.navigate('VendorAuthStack', {
                    screen: 'AreaPictureUpload',
                  });
                } else if (
                  spaceValues !== undefined &&
                  spaceValues !== null &&
                  (spotsData === undefined || spotsData === null)
                ) {
                  dispatch(setSpaceData(spaceValues));
                  navigation.navigate('VendorAuthStack', {
                    screen: 'AreaLayout',
                  });
                } else {
                  setIsLoading(false);
                  navigation.navigate('VendorBottomNavigation');
                }
              } else {
                setIsLoading(false);
              }
            }
          }
        }
      } else {
        console.log('no user found');
      }
    });
  }, []);
  const vendorSideNavigation = async () => {
    navigation.navigate('VendorAuthStack', {screen: 'VendorSignUpScreen'});
  };
  const userAuthStateValidation = async () => {
    navigation.navigate('AuthStack', {screen: 'SignUpScreen'});
  };
  return (
    <>
      {isLoading ? (
        <>
          <ModalBox isVisible={isLoading} />
        </>
      ) : (
        <>
          <ScrollView
            style={[STYLES.flex1, STYLES.bgColor('white')]}
            showsVerticalScrollIndicator={false}>
            <Space mT={80} />
            <AppLogo
              source={IMAGES.logo}
              resizeMode={'contain'}
              height={200}
              width={'100%'}
            />

            <Space mT={50} />
            <View style={style.contentContainer}>
              <AppText
                title={LABELS.welcomeTo}
                fontFamily={Fonts.merriWeatherSansRegular}
                variant={'h1'}
                color={COLORS[theme].text}
              />
              <AppText
                title={LABELS.title}
                variant={'h1'}
                fontFamily={Fonts.merriWeatherBold}
                color={COMMON_COLORS.secondary}
                extraStyle={[STYLES.fontSize(30)]}
              />
              <Space mB={10} />
              <AppText
                title={LABELS.appIntro}
                fontFamily={Fonts.mavenRegular}
                color={COLORS[theme].text}
              />
              <Space mB={30} />
              <GradientButton
                title={LABELS.user}
                textColor={'white'}
                textVariant={'h5'}
                onPress={userAuthStateValidation}
              />
              <Space mB={15} />
              <AppButton
                title={LABELS.vendor}
                extraStyle={{
                  btnContainer: STYLES.bgColor(COMMON_COLORS.steelGrey),
                }}
                textVariant={'h5'}
                textColor={COMMON_COLORS.secondary}
                onPress={vendorSideNavigation}
              />
              <Space mT={20} />
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default IntroScreen;
