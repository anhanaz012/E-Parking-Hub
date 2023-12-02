import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from './styles';
import {COLORS, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {LABELS} from '../../../../labels';
import {SVG} from '../../../../assets/svg';
import Space from '../../../../components/Space/Space';

const ChooseParkingSlot = () => {
  const theme = 'light';
  const style = styles;
  return (
    <View style={[STYLES.flex1, STYLES.bgColor(COLORS.light.white)]}>
      <AppHeader
        title={LABELS.pickSpot}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        theme={theme}
        mL={15}
      />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            height: 60,
            width: '100%',
            paddingHorizontal: 15,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'pink',
            justifyContent: 'space-between',
          }}>
          <Text>hello</Text>
          <Space mL={20} />
          <Text>hello</Text>
          <Space mL={20} />

          <Text>hello</Text>
          <Space mL={20} />

          <Text>hello</Text>
          <Space mL={20} />

          <Text>hello</Text>
          <Space mL={20} />

          <Text>hello</Text>
          <Space mL={20} />

          <Text>hello</Text>
          <Space mL={20} />
          <Text>hello</Text>
          <Space mL={20} />
        </View>
        <View>
            
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseParkingSlot;
