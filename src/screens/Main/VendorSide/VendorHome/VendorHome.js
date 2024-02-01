import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HEIGHT, STYLES} from '../../../../assets/theme';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';

const VendorHome = () => {
  const vendorLoginToken = useSelector(state => state.auth.loginToken);
  const [bookingsRequests, setBookingsRequests] = useState(null);
  const requestCount = bookingsRequests?.length;
  const [isLoading, setIsLoading] = useState(false);
  const style = styles;
  useEffect(() => {
    const getRealTimeChanges = () => {
      const collectionName = `vendor${vendorLoginToken}Bookings`;
      const unsubscribe = firestore()
        .collection(collectionName)
        .where('status', '==', 'pending')
        .onSnapshot(
          querySnapshot => {
            const firestoreData = [];
            querySnapshot.forEach(doc => {
              firestoreData.push({id: doc.id, ...doc.data()});
            });
            setBookingsRequests(firestoreData);
          },
          error => {
            console.error('Error getting real-time changes: ', error);
          },
        );
      return () => {
        unsubscribe();
      };
    };
    getRealTimeChanges();
  }, []);
  const acceptBookingHandler = async item => {
    const vendorToken = item.vendorToken;
    const docId = item.bookingId;
    const userDocId = item.userToken;
    if (item) {
      setIsLoading(true);
      const spotsData = await firestore()
        .collection('ParkingAreas')
        .doc(vendorToken)
        .get();
      const spots = spotsData.data().spots;
      const selectedSpot = spots.find(
        spot => spot.slotId === item.slotDetails.slotId,
      );
      selectedSpot.status = 'booked';
      const updatedSpots = spots.map(spot => {
        if (spot.slotId === selectedSpot.slotId) {
          return selectedSpot;
        }
        return spot;
      });
      await firestore().collection('ParkingAreas').doc(vendorToken).update({
        spots: updatedSpots,
      });
      await firestore().collection('Vendors').doc(vendorToken).update({
        spots: updatedSpots,
      });
      await firestore()
        .collection(`vendor${vendorLoginToken}Bookings`)
        .doc(docId)
        .update({
          status: 'accepted',
        });
      await firestore()
        .collection(`user${userDocId}Bookings`)
        .doc(docId)
        .update({
          status: 'accepted',
        })
        .then(() => {
          const registrationToken = item.messagingToken;
          const data = JSON.stringify({
            data: {},
            notification: {
              body: `Your Booking Request at ${item.areaName} has been accepted`,
              title: 'Booking Accepted',
              color: 'purple',
            },
            to: registrationToken,
          });
          var config = {
            method: 'post',
            url: 'https://fcm.googleapis.com/fcm/send',
            headers: {
              Authorization:
                'key=AAAAI2Br1ko:APA91bFN_OkOaWejDdFKUqzcmvfXqMHnGJUnEszUzRvRANuEAheAQtSRNuaZ4Kow5MmCjvCjwiqHTMaQs3D7PrsSX34gwuXP4WDLNzY9Y85SKaKDY530er_b0bfTR_cBYJbKibvMzqYn',
              'Content-Type': 'application/json',
            },
            data: data,
          };
          axios(config)
            .then(async res => {
              console.log(res, 'res');
              const previousNotifications = await firestore()
                .collection('Notifications')
                .doc(userDocId)
                .get();
              if (previousNotifications.exists) {
                const previousData = previousNotifications.data().notifications;
                previousData.push({
                  title: 'Booking Accepted',
                  message: `Your Booking Request at ${item.areaName} has been accepted`,
                  date: new Date().toLocaleDateString(),
                  notificationId: item.bookingId,
                  bookingDate: item.date,
                  bookingTime: item.time,
                });
                await firestore()
                  .collection('Notifications')
                  .doc(userDocId)
                  .set({
                    notifications: previousData,
                  });
              } else {
                const notificationData = new Array();
                notificationData.push({
                  title: 'Booking Accepted',
                  message: `Your Booking Request at ${item.areaName} has been accepted`,
                  date: new Date().toLocaleDateString(),
                  notificationId: item.bookingId,
                  bookingDate: item.date,
                  bookingTime: item.time,
                });
                await firestore()
                  .collection('Notifications')
                  .doc(userDocId)
                  .set({
                    notifications: notificationData,
                  });
              }
              setIsLoading(false);
            })
            .catch(error => {
              console.log('error');
            });
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };
  const bookingRejectionHandler = async item => {
    const docId = item.bookingId;
    const userDocId = item.userToken;
    setIsLoading(true);
    await firestore()
      .collection(`vendor${vendorLoginToken}Bookings`)
      .doc(docId)
      .update({
        status: 'rejected',
      });
    await firestore()
      .collection(`user${userDocId}Bookings`)
      .doc(docId)
      .update({
        status: 'rejected',
      })
      .then(() => {
        const registrationToken = item.messagingToken;
        const data = JSON.stringify({
          data: {},
          notification: {
            body: `Your Booking Request at ${item.areaName} has been rejected`,
            title: 'Booking Rejected',
            color: 'purple',
            sound: 'default',
          },
          to: registrationToken,
        });
        var config = {
          method: 'post',
          url: 'https://fcm.googleapis.com/fcm/send',
          headers: {
            Authorization:
              'key=AAAAI2Br1ko:APA91bFN_OkOaWejDdFKUqzcmvfXqMHnGJUnEszUzRvRANuEAheAQtSRNuaZ4Kow5MmCjvCjwiqHTMaQs3D7PrsSX34gwuXP4WDLNzY9Y85SKaKDY530er_b0bfTR_cBYJbKibvMzqYn',
            'Content-Type': 'application/json',
          },
          data: data,
        };
        axios(config)
          .then(async res => {
            console.log(res);
            const previousNotifications = await firestore()
              .collection('Notifications')
              .doc(userDocId)
              .get();
            if (previousNotifications.exists) {
              const previousData = previousNotifications.data().notifications;
              previousData.push({
                title: 'Booking Rejected',
                message: `Your Booking Request at ${item.areaName} has been rejected`,
                date: new Date().toLocaleDateString(),
                notificationId: item.bookingId,
                bookingDate: item.date,
                bookingTime: item.time,
              });
              await firestore().collection('Notifications').doc(userDocId).set({
                notifications: previousData,
              });
            } else {
              const notificationData = new Array();
              notificationData.push({
                title: 'Booking Rejected',
                message: `Your Booking Request at ${item.areaName} has been accepted`,
                date: new Date().toLocaleDateString(),
                notificationId: item.bookingId,
                bookingDate: item.date,
                bookingTime: item.time,
              });
              await firestore().collection('Notifications').doc(userDocId).set({
                notifications: notificationData,
              });
            }
            setIsLoading(false);
          })
          .catch(err => {
            setIsLoading(false);
            console.log(err, 'err');
          });
      })
      .catch(err => {
        console.log(err, 'error here');
        setIsLoading(false);
      });
  };
  return (
    <>
      <ScrollView style={[STYLES.flex1, STYLES.bgColor('#FAFAFA')]}>
        {isLoading && <ModalBox isVisible={isLoading} />}
        <AppLogo
          source={IMAGES.imageHome}
          height={120}
          width={'100%'}
          resizeMode={'cover'}
        />
        <View style={style.bookingsContainer}>
          <Space mT={10} />
          <View
            style={[STYLES.height(60), STYLES.rowCenterBt, STYLES.AICenter]}>
            <AppText
              title={LABELS.allBookings}
              fontFamily={Fonts.merriWeatherSansRegular}
              variant={'h4'}
            />
            <AppText
              title={`${requestCount} ${LABELS.requests}`}
              fontFamily={Fonts.latoRegular}
              variant={'body2'}
              color={COLORS.light.primary}
            />
          </View>
          <Space mT={20} />

          {bookingsRequests ? (
            bookingsRequests.map((item, index) => {
              return (
                <>
                  <View style={style.bookingCard}>
                    <View style={[STYLES.rowCenterBt]}>
                      <AppText
                        title={item.userName}
                        fontFamily={Fonts.merriWeatherSansRegular}
                        variant={'h3'}
                      />
                      <AppText
                        title={item.duration}
                        fontFamily={Fonts.merriWeatherSansRegular}
                        variant={'h4'}
                      />
                    </View>
                    <Space mT={5} />
                    <View style={[STYLES.rowCenterBt]}>
                      <AppText
                        title={`Spot ID : ${item.slotDetails.slotId}`}
                        fontFamily={Fonts.mavenRegular}
                        variant={'body2'}
                      />
                      <AppText
                        title={`Spot name : ${item.slotDetails.slotName}`}
                        fontFamily={Fonts.mavenRegular}
                        variant={'body2'}
                      />
                    </View>
                    <Space mT={15} />
                    <View style={[STYLES.rowCenterBt]}>
                      <View>
                        <View style={[STYLES.row]}>
                          <AppText
                            title={`Row no: ${item.slotDetails.row}`}
                            fontFamily={Fonts.latoRegular}
                            variant={'body2'}
                          />
                          <Space mL={20} />
                          <AppText
                            title={`Col no: ${item.slotDetails.col}`}
                            fontFamily={Fonts.latoRegular}
                            variant={'body2'}
                          />
                        </View>
                        <Space mT={5} />
                        <AppText
                          title={`Amount: Rs. ${item.amount}/-`}
                          color={COLORS.light.primary}
                          fontFamily={Fonts.latoRegular}
                        />
                      </View>

                      <View style={[STYLES.row]}>
                        <AppButton
                          onPress={() => {
                            bookingRejectionHandler(item);
                          }}
                          title={
                            <Icon
                              SVGIcon={
                                <SVG.cancel
                                  fill={COLORS.light.red}
                                  height={15}
                                  width={15}
                                />
                              }
                              onPress={() => {
                                bookingRejectionHandler(item);
                              }}
                            />
                          }
                          textColor={COLORS.light.red}
                          extraStyle={{
                            btnContainer: {
                              height: 35,
                              width: 35,
                              borderWidth: 1,
                              borderRadius: 20,
                              backgroundColor: 'transparent',
                              borderColor: COLORS.light.red,
                              elevation: 0,
                            },
                          }}
                        />
                        <Space mR={10} />
                        <AppButton
                          title={
                            <Icon
                              SVGIcon={
                                <SVG.accept
                                  fill={COLORS.light.primary}
                                  height={15}
                                  width={15}
                                />
                              }
                              onPress={() => {
                                acceptBookingHandler(item);
                              }}
                            />
                          }
                          textColor={COLORS.light.primary}
                          extraStyle={{
                            btnContainer: {
                              height: 35,
                              width: 35,
                              borderWidth: 1,
                              borderRadius: 20,
                              backgroundColor: 'transparent',
                              borderColor: COLORS.light.primary,
                              elevation: 0,
                            },
                          }}
                          onPress={() => {
                            acceptBookingHandler(item);
                          }}
                        />
                      </View>
                    </View>
                    <Space mT={10} />
                    <View style={[STYLES.rowCenterBt]}>
                      <View
                        style={[
                          STYLES.row,
                          {
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                            borderRadius: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            alignItems: 'center',
                          },
                        ]}>
                        <Icon
                          SVGIcon={
                            <SVG.clock height={12} width={12} fill={'grey'} />
                          }
                        />
                        <Space mL={5} />
                        <AppText
                          title={`Time: ${item.time}`}
                          fontFamily={Fonts.mavenRegular}
                          variant={'body2'}
                        />
                      </View>
                      <View
                        style={[
                          STYLES.row,
                          {
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: 'lightgrey',
                            borderRadius: 5,
                            paddingVertical: 10,
                            paddingHorizontal: 5,
                            alignItems: 'center',
                          },
                        ]}>
                        <Icon
                          SVGIcon={
                            <SVG.calender
                              height={12}
                              width={12}
                              fill={'grey'}
                            />
                          }
                        />
                        <Space mL={5} />
                        <AppText
                          title={`Date: ${item.date}`}
                          fontFamily={Fonts.mavenRegular}
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
            <View
              style={[
                STYLES.flex1,
                STYLES.AICenter,
                STYLES.JCCenter,
                STYLES.height(HEIGHT * 0.5),
              ]}>
              <AppText
                title={LABELS.noBookingsYet}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
            </View>
          )}
        </View>
        <Space mT={20} />
      </ScrollView>
    </>
  );
};

export default VendorHome;
