import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import Space from '../../../../components/Space/Space';
import {styles} from './styles';
import {LABELS} from '../../../../labels';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
const NotificationScreen = ({navigation}) => {
  const [notifications, setNotifications] = useState(null);
  const theme = 'light';
  const style = styles(theme);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        await AsyncStorage.getItem('userLoginToken').then(async res => {
          if (res) {
            const notifications = await firestore()
              .collection('Notifications')
              .doc(res)
              .get();
            if (notifications.exists) {
              const data = notifications.data().notifications;
              const formattedDates = data.map(item => {
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                if (item.date === today.toLocaleDateString()) {
                  return 'Today';
                } else if (item.date === yesterday.toLocaleDateString()) {
                  return 'Yesterday';
                } else {
                  return item.date;
                }
              });
              setNotifications(data);
            } else {
              console.log('no notifications found');
            }
          } else {
            console.log('no token found');
          }
        });
      } catch (e) {
        console.log(e, 'error in getting token');
      }
    };
    getNotifications();
  }, []);
  const groupedNotifications = {};
  if (notifications) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    notifications.forEach(item => {
      console.log(item, 'item');
      const dateLabel =
        item.date === today.toLocaleDateString()
          ? 'Today'
          : item.date === yesterday.toLocaleDateString()
          ? 'Yesterday'
          : item.date;
      if (!groupedNotifications[dateLabel]) {
        groupedNotifications[dateLabel] = [];
      }
      groupedNotifications[dateLabel].push(item);
    });
  }

  return (
    <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
      <AppHeader
        theme={'light'}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.notification}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
      {groupedNotifications &&
        Object.keys(groupedNotifications)
          .sort((a, b) => {
            if (a === 'Today') return -1;
            if (b === 'Today') return 1;
            if (a === 'Yesterday') return -1;
            if (b === 'Yesterday') return 1;
            return new Date(a) - new Date(b);
          })
          .map(dateLabel => (
            <View key={dateLabel} style={[STYLES.pH(HORIZON_MARGIN)]}>
              <AppText
                title={dateLabel}
                theme={theme}
                variant={'h4'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
              <Space mT={20} />

              {groupedNotifications[dateLabel].map(notificationItem => (
                <>
                  <View
                    key={notificationItem.bookingId}
                    style={style.cardContainer}>
                    <AppLogo
                      source={
                        notificationItem.title === 'Booking Rejected'
                          ? IMAGES.cancel
                          : IMAGES.success
                      }
                      height={60}
                      width={60}
                      resizeMode={'contain'}
                    />
                    <View style={style.contentContainer}>
                      <AppText
                        title={notificationItem.title}
                        theme={theme}
                        variant={'h5'}
                        fontFamily={Fonts.merriWeatherSansRegular}
                      />
                      <Space mT={5} />
                      <AppText
                        title={notificationItem.message}
                        theme={theme}
                        variant={'body2'}
                        fontFamily={Fonts.latoRegular}
                      />
                    </View>
                  </View>
                  <Space mT={20} />
                </>
              ))}

              <Space mT={20} />
            </View>
          ))}

      {!groupedNotifications ||
      Object.keys(groupedNotifications).length === 0 ? (
        <View style={[STYLES.flex1, STYLES.AICenter, STYLES.JCCenter]}>
          <AppText
            title={LABELS.noNotifications}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default NotificationScreen;
