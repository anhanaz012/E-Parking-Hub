import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {vendorBookingsType} from '../../../../data/appData';
import {styles} from './styles';
import ModalBox from '../../../../components/ModalBox/ModalBox';

const VendorBookings = ({navigation}) => {
  const theme = 'light';
  const [selected, setSelected] = useState('accepted');
  const [bookingsType, setBookingsType] = useState('accepted');
  const [acceptedBookings, setAcceptedBookings] = useState(null);
  const [rejectedRequests, setRejectedRequests] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getRealTimeChanges = async () => {
      try {
        setIsLoading(true);
        const vendorId = await AsyncStorage.getItem('vendorLoginToken');
        const collectionName = `vendor${vendorId}Bookings`;
        const unsubscribe = firestore()
          .collection(collectionName)
          .where('status', '==', bookingsType)
          .onSnapshot(
            querySnapshot => {
              const firestoreData = [];
              querySnapshot.forEach(doc => {
                firestoreData.push({id: doc.id, ...doc.data()});
              });
              if (bookingsType == 'accepted') {
                setAcceptedBookings(firestoreData);
              } else {
                setRejectedRequests(firestoreData);
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

  const style = styles;
  return (
    <ScrollView style={[STYLES.flex1]}>
      <AppHeader
        title={'My Bookings'}
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
      <Space mT={20} />
      {isLoading && <ModalBox isVisible={isLoading} />}
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <View
          style={[
            STYLES.rowCenter,
            STYLES.alignSelf('center'),
            STYLES.bR(6),
            STYLES.bgColor(COLORS.light.steelGrey),
          ]}>
          {vendorBookingsType &&
            vendorBookingsType.map(item => {
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
                  }}
                />
              );
            })}
        </View>
        <Space mT={20} />
        {bookingsType == 'accepted' &&
        acceptedBookings &&
        acceptedBookings.length > 0 ? (
          acceptedBookings.map((item, index) => {
            return (
              <>
                <View style={style.activeBookingCard}>
                  <View style={style.activeCardContent}>
                    <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                      <AppText
                        title={item.userName}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                      <Space mT={5} />
                      <AppText
                        title={`Amount : Rs. ${item.amount}/-`}
                        color={COLORS.dark.primary}
                        fontFamily={Fonts.merriWeatherSansRegular}
                        variant={'body2'}
                      />

                      <Space mT={5} />
                      <AppText
                        title={item.duration}
                        color={'grey'}
                        fontFamily={Fonts.mavenRegular}
                        variant={'body2'}
                      />
                    </View>
                  </View>
                  <Space mT={8} />
                  <View style={[STYLES.rowCenterBt]}>
                    <View style={[STYLES.row]}>
                      <Icon
                        SVGIcon={
                          <SVG.clock height={15} width={15} fill={'black'} />
                        }
                      />
                      <Space mL={5} />
                      <AppText
                        title={`Time: ${item.time}`}
                        fontFamily={Fonts.latoRegular}
                        variant={'body2'}
                      />
                    </View>
                    <View style={[STYLES.row]}>
                      <Icon
                        SVGIcon={
                          <SVG.calender height={15} width={15} fill={'black'} />
                        }
                      />
                      <Space mL={5} />
                      <AppText
                        title={`Date: ${item.date}`}
                        fontFamily={Fonts.latoRegular}
                        variant={'body2'}
                      />
                    </View>
                  </View>
                </View>

                <Space mT={20} />
              </>
            );
          })
        ) : bookingsType == 'rejected' &&
          rejectedRequests &&
          rejectedRequests.length > 0 ? (
          rejectedRequests.map((item, index) => {
            return (
              <>
                <View style={style.completedBookingCard}>
                  <View style={style.completedCardContent}>
                    <View style={[STYLES.width('95%'), STYLES.JCCenter]}>
                      <AppText
                        title={item.userName}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                      <Space mT={5} />
                      <AppText
                        title={`Duration : ${item.duration}`}
                        color={'grey'}
                        fontFamily={Fonts.mavenRegular}
                        variant={'body2'}
                      />
                    </View>
                  </View>
                  <Space mT={5} />
                  <View style={[STYLES.rowCenterBt]}>
                    <View style={[STYLES.row]}>
                      <Icon
                        SVGIcon={
                          <SVG.clock height={15} width={15} fill={'black'} />
                        }
                      />
                      <Space mL={5} />
                      <AppText
                        title={`Time: ${item.time}`}
                        fontFamily={Fonts.latoRegular}
                        variant={'body2'}
                      />
                    </View>
                    <View style={[STYLES.row]}>
                      <Icon
                        SVGIcon={
                          <SVG.calender height={15} width={15} fill={'black'} />
                        }
                      />
                      <Space mL={5} />
                      <AppText
                        title={`Date: ${item.date}`}
                        fontFamily={Fonts.latoRegular}
                        variant={'body2'}
                      />
                    </View>
                  </View>
                </View>

                <Space mT={20} />
              </>
            );
          })
        ) : (
          <AppText title={'Nothing to display'} />
        )}
      </View>
    </ScrollView>
  );
};

export default VendorBookings;
