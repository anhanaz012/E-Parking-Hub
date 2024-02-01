import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const isIntroScreenMounted = useRef(true);
  const theme = 'light';
  const style = styles(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (isIntroScreenMounted.current && user) {
        const userUid = user.uid;
        try {
          const userData = await firestore()
            .collection('AllUsers')
            .doc(userUid)
            .get();
          console.log(userData);
          if (userData.exists) {
            const {role} = userData.data();
            if (role === 'user') {
              if (isIntroScreenMounted.current) {
                await AsyncStorage.setItem('userLoginToken', userUid);
                dispatch(setLoginToken(userUid));
                setIsLoading(false);
                navigation.navigate('BottomNavigation');
              }
            } else if (role === 'vendor'){
              dispatch(setLoginToken(userUid));
              await AsyncStorage.setItem('vendorLoginToken', userUid);
              const vendorData = await firestore()
                .collection('Vendors')
                .doc(userUid)
                .get();
              if (vendorData.exists) {
                const {formValues, image, spots} = vendorData.data();
                if (formValues === undefined || formValues === null) {
                  if (isIntroScreenMounted.current) {
                    setIsLoading(false);
                    navigation.navigate('VendorAuthStack', {
                      screen: 'SpaceDetailsScreen',
                    });
                  }
                } else if (image === '') {
                  setIsLoading(false);
                  dispatch(setSpaceData(formValues));
                  if (isIntroScreenMounted.current) {
                    navigation.navigate('VendorAuthStack', {
                      screen: 'AreaPictureUpload',
                    });
                  }
                } else if (spots === undefined || spots === null) {
                  if (isIntroScreenMounted.current) {
                    dispatch(setSpaceData(formValues));
                    setTimeout(() => {
                      setIsLoading(false);
                      navigation.navigate('VendorAuthStack', {
                        screen: 'AreaLayout',
                      });
                    }, 1000);
                  }
                } else {
                  if (isIntroScreenMounted.current) {
                    setIsLoading(false);
                    navigation.navigate('VendorBottomNavigation');
                  }
                }
              } else {
                setIsLoading(false);
                console.log('user data does not exist in firestore');
              }
            }
          }
        } catch (err) {
          setIsLoading(false);
          console.error('Error during authentication or data retrieval', err);
        }
      } else {
        if (isIntroScreenMounted.current) {
          setIsLoading(false);
        }
      }
    });

    return () => {
      isIntroScreenMounted.current = false;
      unsubscribe();
      setIsLoading(false);
    };
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
