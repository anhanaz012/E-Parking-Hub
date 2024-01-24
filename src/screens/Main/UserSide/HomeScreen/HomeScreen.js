import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {
  setAreaDetails,
  setAreaImage,
  setParkingAreas,
  setUserToken,
  setVendorToken,
} from '../../../../store/slices/areaSlice';
import {styles} from './styles';
const HomeScreen = ({navigation}) => {
  const [areasList, setAreasList] = useState(null);
  const [loginToken, setLoginToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [popularAreas, setPopularAreas] = useState(null);
  const theme = 'light';
  const style = styles;
  const dispatch = useDispatch();
  const getLoginToken = async () => {
    await AsyncStorage.getItem('userLoginToken').then(res => {
      if (res) {
        setLoginToken(res);
      }
    });
  };
  const getRealTimeChanges = () => {
    const unsubscribe = firestore()
      .collection('ParkingAreas')
      .onSnapshot(
        querySnapshot => {
          const firestoreData = [];
          querySnapshot.forEach(doc => {
            firestoreData.push({id: doc.id, ...doc.data()});
          });
          const popularAreas = firestoreData
            .filter(item => item.count > 0)
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
          setPopularAreas(popularAreas);
          const allAreas = firestoreData.filter(
            item => !popularAreas.includes(item),
          );
          setAreasList(allAreas);
        },
        error => {
          console.error('Error getting real-time changes: ', error);
        },
      );
    return () => {
      unsubscribe();
    };
  };
  useEffect(() => {
    try {
      setIsLoading(true);
      getLoginToken();
      getRealTimeChanges();
      setIsLoading(false);
    } catch (err) {
      console.log('error while fetching login token', err);
    }
  }, []);
  const searchAreaHandler = () => {
    console.log('hello');
  };
  const areaSelectionHandler = item => {
    console.log('item from home', item);
    dispatch(setParkingAreas(item.spots, item.formValues));
    dispatch(setAreaDetails(item.formValues));
    dispatch(setVendorToken(item.token));
    dispatch(setUserToken(loginToken));
    dispatch(setAreaImage(item.image));
    navigation.navigate('HomeStack', {
      screen: 'SpotSelectionScreen',
    });
  };
  return (
    <ScrollView style={[STYLES.flex1]}>
      {isLoading && <ModalBox isVisible={isLoading} />}
      <AppHeader
        title={LABELS.welcomeTo}
        theme={theme}
        textVariant={'body1'}
        fontFamily={Fonts.mavenRegular}
        children={
          <>
            <AppText
              title={LABELS.appTitle}
              theme={theme}
              color={COLORS.light.primary}
              fontFamily={Fonts.merriWeatherBold}
              variant={'h4'}
            />
          </>
        }
        mL={10}
        iconLeft={
          <SVG.location fill={COLORS.light.primary} height={25} width={25} />
        }
      />
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View style={[STYLES.rowCenter, STYLES.JCAround, STYLES.width100]}>
          <AppInput
            theme={theme}
            placeholder={LABELS.findParkingArea}
            iconLeft={<SVG.search fill={'grey'} height={15} width={15} />}
            extraStyle={{
              textInputContainer: style.textInputCont,
              textInput: style.textInput,
            }}
            mL={6}
          />
          <GradientButton
            extraStyle={{btnContainer: [STYLES.width(50)]}}
            iconLeft={
              <SVG.locationArrow fill={'white'} height={15} width={15} />
            }
            onPress={searchAreaHandler}
          />
        </View>
        <Space mT={30} />
        <View
          style={[STYLES.width('100%'), STYLES.rowCenterBt, STYLES.AICenter]}>
          <AppText
            title={LABELS.popularLocations}
            theme={theme}
            color={'black'}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'h3'}
          />
          <AppText
            title={LABELS.seeAll}
            theme={theme}
            color={COLORS[theme].primary}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'body2'}
            onPress={() => {
              navigation.navigate('HomeStack', {screen: 'AreasListScreen'});
            }}
          />
        </View>
        <Space mT={20} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[STYLES.height(220)]}>
          {popularAreas &&
            popularAreas.map((item, index) => {
              return (
                <>
                  <View style={style.horizontalCardContainer}>
                    <AppLogo
                      uri={item.image}
                      height={'50%'}
                      width={'100%'}
                      extraStyle={[STYLES.bR(20)]}
                    />
                    <Space mT={10} />
                    <View style={[STYLES.height('45%'), STYLES.JCCenter]}>
                      <AppText
                        title={item.formValues.spaceName}
                        numberOfLines={1}
                        theme={theme}
                        variant={'h4'}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                      <Space mT={2} />
                      <AppText
                        title={item.formValues.address}
                        theme={theme}
                        numberOfLines={2}
                        extraStyle={{fontSize: 12}}
                        color={'grey'}
                        fontFamily={Fonts.latoRegular}
                      />
                      <Space mT={10} />
                      <View style={[STYLES.rowCenterBt]}>
                        <AppText
                          title={`Rs. ${item.formValues.price}/hr`}
                          theme={theme}
                          fontFamily={Fonts.merriWeatherSansRegular}
                        />
                        <GradientButton
                          theme={theme}
                          extraStyle={{
                            btnContainer: {
                              height: 30,
                              width: 30,
                              borderRadius: 15,
                              backgroundColor: 'transparent',
                              elevation: 0,
                            },
                          }}
                          iconLeft={
                            <SVG.boxrightarrow
                              fill={'white'}
                              height={17}
                              width={17}
                            />
                          }
                          onPress={() => {
                            areaSelectionHandler(item);
                          }}
                          onLeftIconPress={() => {
                            areaSelectionHandler(item);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <Space mR={20} />
                </>
              );
            })}
        </ScrollView>
        <View
          style={[STYLES.width('100%'), STYLES.rowCenterBt, STYLES.AICenter]}>
          <AppText
            title={'All areas'}
            theme={theme}
            color={'black'}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'h3'}
          />
          <AppText
            title={'See all'}
            theme={theme}
            color={COLORS[theme].primary}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'body2'}
            onPress={() => {
              navigation.navigate('HomeStack', {screen: 'AreasListScreen'});
            }}
          />
        </View>
        <Space mT={20} />

        {areasList &&
          areasList.map((item, index) => {
            return (
              <>
                <View style={style.verticalCardContainer} key={item.image}>
                  <AppLogo
                    uri={item.image}
                    height={'85%'}
                    width={'30%'}
                    extraStyle={{borderRadius: 20}}
                  />
                  <View
                    style={[
                      STYLES.JCCenter,
                      STYLES.width('70%'),
                      STYLES.pH(10),
                    ]}>
                    <View
                      style={[
                        STYLES.row,
                        STYLES.width('100%'),
                        STYLES.height('30%'),
                        STYLES.rowCenter,
                      ]}>
                      <View style={[STYLES.width('80%')]}>
                        <AppText
                          title={item.formValues.spaceName}
                          numberOfLines={1}
                          theme={theme}
                          variant={'h4'}
                          fontFamily={Fonts.merriWeatherSansRegular}
                        />
                      </View>
                      <View
                        style={[STYLES.width('20%'), STYLES.row, STYLES.JCEnd]}>
                        <Icon
                          SVGIcon={
                            <SVG.rightarrow
                              fill={'purple'}
                              height={18}
                              width={18}
                            />
                          }
                          onPress={() => {
                            areaSelectionHandler(item);
                          }}
                        />
                      </View>
                    </View>

                    <View style={[STYLES.height('30%'), STYLES.width100]}>
                      <AppText
                        title={item.formValues.address}
                        theme={theme}
                        numberOfLines={2}
                        extraStyle={[STYLES.fontSize(13)]}
                        color={'gray'}
                        ellipsizeMode={'tail'}
                        fontFamily={Fonts.latoRegular}
                      />
                    </View>
                    <View
                      style={[
                        STYLES.rowCenterBt,
                        STYLES.AICenter,
                        STYLES.height('30%'),
                        STYLES.width100,
                      ]}>
                      {item.ratings ? (
                        <View style={[STYLES.row]}>
                          <Icon SVGIcon={<SVG.starFilled fill={'orange'} />} />
                          <Space mL={5} />
                          <AppText
                            title={'4.5'}
                            theme={theme}
                            fontFamily={Fonts.merriWeatherSansRegular}
                          />
                        </View>
                      ) : (
                        <View style={[STYLES.rowCenter]}>
                          <Icon SVGIcon={<SVG.starFilled fill={'orange'} />} />
                          <Space mL={5} />
                          <AppText
                            title={'No Ratings yet'}
                            theme={theme}
                            variant={'body2'}
                            color={COLORS.light.primary}
                            fontFamily={Fonts.latoRegular}
                          />
                        </View>
                      )}
                      <AppText
                        title={`Rs. ${item.formValues.price}/hr`}
                        theme={theme}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                    </View>
                  </View>
                </View>
                <Space mT={20} />
              </>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
