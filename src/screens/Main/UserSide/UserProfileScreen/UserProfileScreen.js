import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SVG} from '../../../../assets/svg';
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
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import {Toast} from '../../../../utils/native';
import {ERRORS} from '../../../../labels/error';
import ModalBox from '../../../../components/ModalBox/ModalBox';
const UserProfileScreen = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = 'light';
  const style = styles;
  useEffect(() => {
    const getLoginToken = async () => {
      try {
        await AsyncStorage.getItem('userLoginToken').then(async res => {
          const uid = res;
          if (res != null) {
            setIsLoading(true);
            const user = await firestore().collection('Users').doc(res).get();
            if (user) {
              setUserData(user.data());
              setIsLoading(false);
            } else {
              setIsLoading(false);
              Toast(ERRORS.gettingDataError);
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    getLoginToken();
  }, []);
  const logoutHandler = () => {
    auth()
      .signOut()
      .then(async () => {
        navigation.navigate('AuthStack', {
          screen: 'IntroScreen',
        });
      });
  };
  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.profile}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
      {isLoading && <ModalBox isVisible={isLoading} />}
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
            title={userData?.fullName}
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
            title={`+92${userData?.phone}`}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <View style={style.logoutContainer}>
          <Icon
            SVGIcon={<SVG.at fill={COLORS.light.grey} height={15} width={15} />}
          />
          <Space mL={15} />
          <AppText
            title={userData?.email}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <Space mT={30} />
        <AppText
          title={LABELS.VehicleDetails}
          theme={theme}
          fontFamily={Fonts.merriWeatherSansRegular}
          variant={'h3'}
        />
        <Space mT={20} />
        <View style={style.infoContainer}>
          <Icon
            SVGIcon={
              <SVG.carIcon fill={COLORS.light.grey} height={20} width={20} />
            }
          />
          <Space mL={15} />
          <AppText
            title={userData?.carModel}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <TouchableOpacity style={style.logoutContainer} onPress={logoutHandler}>
          <Icon SVGIcon={<SVG.logout fill={'red'} height={20} width={20} />} />
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
    </ScrollView>
  );
};

export default UserProfileScreen;
