import React from 'react';
import { ScrollView, View } from 'react-native';
import { SVG } from '../../../../assets/svg';
import { COLORS, Fonts, HORIZON_MARGIN, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const PaymentScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles;
  return (
    <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.payment}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={10}
      />
      <Space mT={30} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <AppText
          title={LABELS.choosePayMethod}
          theme={theme}
          variant={'h4'}
          fontFamily={Fonts.merriWeatherSansRegular}
        />
        <Space mT={50} />
        <View style={style.payMethodContainer}>
          <View style={[STYLES.row, STYLES.width('80%')]}>
            <Icon SVGIcon={<SVG.paypal height={25} width={25} />} />
            <Space mR={10} />
            <AppText title={LABELS.payPal} theme={theme} />
          </View>
          <Icon
            SVGIcon={
              <SVG.unfilledCircle
                height={20}
                width={20}
                fill={COLORS.light.secondary}
              />
            }
          />
        </View>
        <Space mT={20} />
        <View style={style.payMethodContainer}>
          <View style={[STYLES.row, STYLES.width('80%')]}>
            <Icon SVGIcon={<SVG.google height={25} width={25} />} />
            <Space mR={10} />
            <AppText title={LABELS.GooglePay} theme={theme} />
          </View>
          <Icon
            SVGIcon={
              <SVG.unfilledCircle
                height={20}
                width={20}
                fill={COLORS.light.secondary}
              />
            }
          />
        </View>
        <Space mT={20} />
        <View style={style.payMethodContainer}>
          <View style={[STYLES.row, STYLES.width('80%')]}>
            <Icon SVGIcon={<SVG.stripe height={25} width={25} />} />
            <Space mR={10} />
            <AppText title={LABELS.stripe} theme={theme} />
          </View>
          <Icon
            SVGIcon={
              <SVG.unfilledCircle
                height={20}
                width={20}
                fill={COLORS.light.secondary}
              />
            }
          />
        </View>
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
