import React, {useState, useEffect} from 'react';
import {Text, View, AppState} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import AppText from '../AppText/AppText';
import Space from '../Space/Space';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../assets/theme';

const CountdownTimer = ({durationInSeconds, onTimerEnd}) => {
  const app = AppState.isAvailable;
  const [time, setTime] = useState(durationInSeconds);
  useEffect(() => {
    const intervalId = BackgroundTimer.setInterval(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        BackgroundTimer.clearInterval(intervalId);
        onTimerEnd();
      }
    }, 1000);
    return () => {
      BackgroundTimer.clearInterval(intervalId);
    };
  }, [time]);
  const formatHours = seconds => {
    const hours = Math.floor(seconds / 3600);
    return `${hours.toString().padStart(2, '0')}`;
  };
  const formatMinutes = seconds => {
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${minutes.toString().padStart(2, '0')}`;
  };
  const formatSeconds = seconds => {
    const remainingSeconds = seconds % 60;
    return `${remainingSeconds.toString().padStart(2, '0')}`;
  };
  return (
    <>
      <View style={[STYLES.row, STYLES.JCEvenly, STYLES.pH(HORIZON_MARGIN)]}>
        <View>
          <View style={[STYLES.row]}>
            <AppText title={formatHours(time)} variant={'h1'} />
            <Space mL={20} />
            <AppText title={':'} variant={'h1'} />
          </View>
          <AppText
            title={'Hours'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <View>
          <View style={[STYLES.row]}>
            <AppText title={formatMinutes(time)} variant={'h1'} />
            <Space mL={20} />
            <AppText title={':'} variant={'h1'} />
          </View>
          <AppText
            title={'Minutes'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
        <View>
          <AppText title={formatSeconds(time)} variant={'h1'} />
          <AppText
            title={'Seconds'}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
        </View>
      </View>
    </>
  );
};

export default CountdownTimer;
