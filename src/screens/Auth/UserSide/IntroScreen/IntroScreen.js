import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {Modal, ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import ModalBox from '../../../../components/ModalBox/ModalBox';

const IntroScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const theme = 'light';
  const style = styles(theme);
  const vendorAuthStateValidation = async () => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged(async user => {
      if (user != null) {
        const uid = user.uid;
        setTimeout(async () => {
          const user = await firestore().collection('AllUsers').doc(uid).get();
          if (user.data().role === 'vendor') {
            setIsLoading(false);
            navigation.navigate('VendorBottomNavigation');
          }
        }, 1000);
      } else {
        setIsLoading(false);
        navigation.navigate('VendorAuthStack', {screen: 'VendorSignUp'});
      }
    });
  };
  const userAuthStateValidation = async () => {
    setIsLoading(true);
    firebase.auth().onAuthStateChanged(async user => {
      try {
        if (user != null) {
          const uid = user.uid;
          setTimeout(async () => {
            const userDoc = await firestore()
              .collection('AllUsers')
              .doc(uid)
              .get();
            if (userDoc.exists && userDoc.data().role === 'user') {
              setIsLoading(false);
              navigation.replace('BottomNavigation');
            } else {
              setIsLoading(false);
              navigation.replace('AuthStack', {screen: 'SignUpScreen'});
            }
          }, 1000);
        } else {
          setIsLoading(false);
          navigation.replace('AuthStack', {screen: 'SignUpScreen'});
        }
      } catch (error) {
        console.error('Error during user authentication:', error);
        setIsLoading(false);
        // Handle error, e.g., show an error message to the user
      }
    });
  };
  return (
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
      {isLoading && <ModalBox isVisible={isLoading} />}
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
          extraStyle={{btnContainer: STYLES.bgColor(COMMON_COLORS.steelGrey)}}
          textVariant={'h5'}
          textColor={COMMON_COLORS.secondary}
          onPress={vendorAuthStateValidation}
        />
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default IntroScreen;
