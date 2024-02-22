import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {
  COLORS,
  Fonts,
  HEIGHT,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {userBookingsType} from '../../../../data/appData';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import {useDispatch} from 'react-redux';
import {setSelectedArea} from '../../../../store/slices/bookingSlice';

const MyBookingScreen = ({navigation}) => {
  const theme = 'light';
  const [selected, setSelected] = useState('upcoming');
  const [bookingsType, setBookingsType] = useState('upcoming');
  const [upcomingBookings, setUpcomingBookings] = useState(null);
  const [pastBookings, setPastBookings] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const style = styles;
  useEffect(() => {
    const getRealTimeChanges = async () => {
      try {
        setIsLoading(true);
        const userId = await AsyncStorage.getItem('userLoginToken');
        const collectionName = `user${userId}Bookings`;
        const unsubscribe = firestore()
          .collection(collectionName)
          .where('isCompleted', '==', status)
          .onSnapshot(
            querySnapshot => {
              const firestoreData = [];
              querySnapshot.forEach(doc => {
                firestoreData.push({id: doc.id, ...doc.data()});
              });
              if (bookingsType == 'upcoming') {
                const filteredBookings = firestoreData.filter(
                  item => item.status != 'rejected',
                );
                setUpcomingBookings(filteredBookings);
              } else {
                setPastBookings(firestoreData);
              }
              setIsLoading(false);
            },
            error => {
              setIsLoading(false);
              console.error('Error getting real-time changes: ', error);
            },
          );
        return () => {
          unsubscribe();
        };
      } catch (e) {
        setIsLoading(false);
        console.log(e, 'error');
      }
    };
    getRealTimeChanges();
  }, [bookingsType]);
  const selectBookingHandler = item => {
    const date = item.bookingDateTime.toDate();
    const newItem = {...item, bookingDateTime: date};
    dispatch(setSelectedArea(newItem));
    navigation.navigate('HomeStack', {
      screen: 'CheckInScreen',
    });
  };
  return (
    <ScrollView style={[STYLES.flex1]}>
      <AppHeader
        title={'My Bookings'}
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        mL={15}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View
          style={[
            STYLES.rowCenter,
            STYLES.alignSelf('center'),
            STYLES.bR(6),
            STYLES.bgColor(COLORS.light.steelGrey),
          ]}>
          {userBookingsType &&
            userBookingsType.map(item => {
              return (
                <AppButton
                  title={item.value}
                  textColor={item.value === selected ? 'white' : 'black'}
                  extraStyle={{
                    btnContainer:
                      item.value === selected
                        ? style.selectedBtn
                        : style.unSelectedBtn,
                  }}
                  textVariant="h5"
                  onPress={() => {
                    setBookingsType(item.value);
                    setSelected(item.value);
                    if (item.value == 'upcoming') {
                      setStatus(false);
                    } else {
                      setStatus(true);
                    }
                  }}
                />
              );
            })}
        </View>
        <Space mT={20} />

        {isLoading && <ModalBox isVisible={isLoading} />}
        {bookingsType == 'upcoming' &&
        upcomingBookings &&
        upcomingBookings.length > 0 ? (
          upcomingBookings.map((item, index) => {
            return (
              <>
                <View style={style.activeBookingCard}>
                  <View style={style.activeCardContent}>
                    <AppLogo
                      uri={item.image}
                      height={'80%'}
                      width={'30%'}
                      extraStyle={{borderRadius: 10}}
                    />
                    <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                      <AppText
                        title={item.areaName}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                      <Space mT={5} />
                      <AppText
                        title={`Duration: ${item.duration}`}
                        color={'grey'}
                        fontFamily={Fonts.mavenRegular}
                        variant={'body2'}
                      />
                      <Space mT={5} />
                      <AppText
                        title={`Rs. ${item.amount} /-`}
                        color={COLORS.dark.primary}
                        fontFamily={Fonts.merriWeatherSansRegular}
                        variant={'body2'}
                      />
                    </View>
                  </View>
                  <Space mT={8} />
                  <View style={[STYLES.rowCenterBt]}>
                    <AppButton
                      title={item.status}
                      textColor={'grey'}
                      extraStyle={{
                        btnContainer: {
                          width: 80,
                          height: 35,
                          backgroundColor: 'transparent',
                          borderWidth: 1,
                          borderColor: COLORS.light.steelGrey,
                          elevation: 0,
                        },
                      }}
                    />
                    <GradientButton
                      title={LABELS.View}
                      extraStyle={{btnContainer: {height: 40, width: 100}}}
                      textColor={'white'}
                      onPress={() => {
                        selectBookingHandler(item);
                      }}
                    />
                  </View>
                </View>
                <Space mT={20} />
              </>
            );
          })
        ) : bookingsType == 'past' &&
          pastBookings &&
          pastBookings.length > 0 ? (
          pastBookings.map((item, index) => {
            return (
              <>
                <View style={style.completedBookingCard}>
                  <AppLogo
                    uri={item.image}
                    height={'80%'}
                    width={'30%'}
                    extraStyle={{borderRadius: 10}}
                  />
                  <View style={[STYLES.width('65%'), STYLES.JCCenter]}>
                    <AppText
                      title={item.areaName}
                      fontFamily={Fonts.merriWeatherSansRegular}
                    />
                    <Space mT={5} />
                    <AppText
                      title={item.bookingId}
                      color={'grey'}
                      fontFamily={Fonts.mavenRegular}
                      variant={'body2'}
                    />
                    <Space mT={5} />
                    <AppText
                      title={`Rs. ${item.amount} /-`}
                      color={COLORS.dark.primary}
                      fontFamily={Fonts.merriWeatherSansRegular}
                      variant={'body2'}
                    />
                  </View>
                </View>
                <Space mT={20} />
              </>
            );
          })
        ) : (
          <View
            style={[
              STYLES.flex1,
              STYLES.height(HEIGHT * 0.5),
              STYLES.JCCenter,
              STYLES.AICenter,
            ]}>
            <AppText
              title={LABELS.noBookingsYet}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MyBookingScreen;
