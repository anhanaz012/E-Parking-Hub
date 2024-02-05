import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import AppText from '../AppText/AppText';
import Space from '../Space/Space';
import {STYLES} from '../../assets/theme';

const CountdownTimer = ({durationInSeconds}) => {
  const [time, setTime] = useState(durationInSeconds);

  useEffect(() => {
    const intervalId = BackgroundTimer.setInterval(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        BackgroundTimer.clearInterval(intervalId);
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
    <View
      style={[STYLES.rowCenter, STYLES.AICenter, STYLES.alignSelf('center')]}>
      <AppText title={formatHours(time)} variant={'h1'} />
      <Space mL={10} />
      <AppText title={':'} variant={'h1'} />
      <Space mL={10} />
      <AppText title={formatMinutes(time)} variant={'h1'} />
      <Space mL={10} />
      <AppText title={':'} variant={'h1'} />
      <Space mL={10} />
      <AppText title={formatSeconds(time)} variant={'h1'} />
    </View>
  );
};

export default CountdownTimer;
