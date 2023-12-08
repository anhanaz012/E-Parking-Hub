import React, {useState} from 'react';
import {View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import AppButton from '../../../../components/Button/Button';

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
        <View style={[STYLES.rowCenterBt, STYLES.height(40), STYLES.AICenter]}>
          <AppText
            title={'Parking area'}
            theme={theme}
            variant={'body1'}
            color={'grey'}
            fontFamily={Fonts.latoRegular}
          />
          <AppText
            title={'Louis Menentron'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.merriWeatherSansRegular}
            color={'black'}
          />
        </View>
        <Space mT={10} />

        <View style={[STYLES.rowCenterBt, STYLES.height(40), STYLES.AICenter]}>
          <AppText
            title={'Slot No'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.latoRegular}
            color={'grey'}
          />
          <AppText
            title={'A2'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.merriWeatherSansRegular}
            color={'black'}
          />
        </View>
        <Space mT={10} />

        <View style={[STYLES.rowCenterBt, STYLES.height(40), STYLES.AICenter]}>
          <AppText
            title={'Price'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.latoRegular}
            color={'grey'}
          />
          <AppText
            title={'$ 2.00/hr'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.merriWeatherSansRegular}
            color={'black'}
          />
        </View>
        <Space mT={10} />

        <View style={[STYLES.rowCenterBt, STYLES.height(40), STYLES.AICenter]}>
          <AppText
            title={'Date'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.latoRegular}
          />
          <View style={[STYLES.row]}>
            <AppText
              title={'Select Date'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.merriWeatherSansRegular}
              color={'black'}
            />
            <Space mL={5} />
            <Icon SVGIcon={<SVG.leftArrow fill={'black'} />} />
          </View>
        </View>
        <Space mT={10} />

        <View style={[STYLES.rowCenterBt, STYLES.height(40), STYLES.AICenter]}>
          <AppText
            title={'Time'}
            theme={theme}
            variant={'body1'}
            fontFamily={Fonts.latoRegular}
          />
          <View style={[STYLES.row]}>
            <AppText
              title={'Select Time'}
              theme={theme}
              variant={'body1'}
              fontFamily={Fonts.merriWeatherSansRegular}
              color={'black'}
            />
            <Icon SVGIcon={<SVG.leftArrow fill={'black'} />} />
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
