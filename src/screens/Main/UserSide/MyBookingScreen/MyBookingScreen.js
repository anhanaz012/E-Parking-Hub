import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {COLORS, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {SVG} from '../../../../assets/svg';
import AppButton from '../../../../components/Button/Button';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import Space from '../../../../components/Space/Space';

const MyBookingScreen = () => {
  const theme = 'light';
  const [selected, setSelected] = useState('Upcoming');
  const style = styles;
  return (
    <ScrollView style={[STYLES.flex1]}>
      <AppHeader
        title={'My Bookings'}
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        mL={15}
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
          <AppButton
            title={LABELS.upcoming}
            textColor={selected === 'Upcoming' ? 'white' : 'black'}
            textVariant="h5"
            extraStyle={{
              btnContainer:
                selected === 'Upcoming'
                  ? style.selectedBtn
                  : style.unSelectedBtn,
            }}
            onPress={() => setSelected('Upcoming')}
          />
          <AppButton
            title={LABELS.past}
            textColor={selected === 'Past' ? 'white' : 'black'}
            extraStyle={{
              btnContainer:
                selected === 'Past' ? style.selectedBtn : style.unSelectedBtn,
            }}
            textVariant="h5"
            onPress={() => setSelected('Past')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MyBookingScreen;
