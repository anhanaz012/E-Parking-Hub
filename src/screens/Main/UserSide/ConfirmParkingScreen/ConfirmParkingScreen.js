import React, {useState} from 'react';
import {View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppText from '../../../../components/AppText/AppText';
import AppButton from '../../../../components/Button/Button';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';

const ConfirmParkingScreen = () => {
  const [selected, setSelected] = useState('');
  const [showCalender, setShowCalender] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const theme = 'light';
  const style = styles();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const newDate = date.toDateString();
    const newTime = date.toLocaleTimeString();
    hideDatePicker();
  };
  return (
    <View style={style.container}>
      <View
        style={[
          STYLES.rowCenterBt,
          STYLES.width100,
          STYLES.AICenter,
          STYLES.pH(15),
        ]}>
        <View style={[STYLES.width('50%')]}>
          <AppText
            title={LABELS.confirmBooking}
            theme={theme}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'h4'}
          />
        </View>

        <View style={[STYLES.width('50%'), STYLES.row, STYLES.JCEnd]}>
          <Icon
            SVGIcon={<SVG.cancel fill={'black'} height={20} width={20} />}
          />
        </View>
      </View>
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <Space mT={20} />
        <View style={[STYLES.row]}>
          <View style={[STYLES.width('50%')]}>
            <AppText
              title={LABELS.parkingArea}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <AppText
              title={LABELS.slotID}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <AppText
              title={LABELS.price}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />

            <Space mT={15} />
            <AppText
              title={LABELS.date}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <AppText
              title={LABELS.time}
              theme={theme}
              variant={'body1'}
              color={'grey'}
              fontFamily={Fonts.latoRegular}
            />
          </View>
          
          <View style={[STYLES.width('50%')]}>
            <AppText
              title={'Louis Marventen'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <AppText
              title={'A2'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <AppText
              title={'$10/hr'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.latoRegular}
            />
            <Space mT={15} />
            <View style={[STYLES.row]}>
              <AppText
                title={'Select Date'}
                theme={theme}
                variant={'body1'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mL={5} />
              <Icon
                SVGIcon={<SVG.calender fill={'black'} height={15} width={15} />}
              />
            </View>
            <Space mT={15} />
            <View style={[STYLES.row]}>
              <AppText
                title={'Select Time'}
                theme={theme}
                variant={'body1'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mL={5} />
              <Icon SVGIcon={<SVG.clock fill={'black'} height={15} width={15} />} />
            </View>
          </View>

        </View>
        <Space mT={30} />
        <View
          style={[
            STYLES.rowCenterBt,
            STYLES.JCCenter,
            STYLES.pH(HORIZON_MARGIN),
          ]}>
          <AppButton
            title={LABELS.cancel}
            textVariant={'h5'}
            theme={'light'}
            extraStyle={{btnContainer: {width: '50%'}}}
          />
          <Space mL={10} />
          <GradientButton
            title={LABELS.confirm}
            textColor={'white'}
            textVariant={'h5'}
            theme={'light'}
          />
        </View>
      </View>
    </View>
  );
};

export default ConfirmParkingScreen;
