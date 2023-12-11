import React, {useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppText from '../../../../components/AppText/AppText';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import {PaymentData} from '../../../../data/appData';
import AppModal from '../../../../components/AppModal/AppModal';

const PaymentScreen = ({navigation}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const theme = 'light';
  const style = styles;
  const handleSelectPaymentMethod = item => {
    const index = PaymentData.indexOf(item);
    setSelectedPaymentMethod(item);
    PaymentData[index].isSelected = !PaymentData[index].isSelected;
    console.log(PaymentData);
    setIsModalVisible(true);
  };
  return (
    <ScrollView style={[STYLES.flex1, STYLES.bgColor('white')]}>
      <AppModal
        isVisible={isModalVisible}
        onBtnPress={() => {
          Alert.alert('Payment Successful');
          setIsModalVisible(false);
          navigation.navigate('BottomNavigation', {screen: 'Home'});
        }}
        onClose={() => {
          setIsModalVisible(false);
        }}
      />
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.payment}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
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
        {PaymentData ? (
          PaymentData.map((item, index) => {
            return (
              <>
                <View style={style.payMethodContainer} key={index}>
                  <View style={[STYLES.row, STYLES.width('80%')]}>
                    <Icon SVGIcon={<item.icon height={25} width={25} />} />
                    <Space mR={10} />
                    <AppText title={item.title} theme={theme} />
                  </View>
                  <Icon
                    SVGIcon={
                      item.id === selectedPaymentMethod.id ? (
                        <SVG.filledCircle
                          height={20}
                          width={20}
                          fill={COLORS.light.primary}
                          onPress={() => {
                            handleSelectPaymentMethod(item);
                          }}
                        />
                      ) : (
                        <SVG.unfilledCircle
                          height={20}
                          width={20}
                          fill={COLORS.light.secondary}
                          onPress={() => {
                            handleSelectPaymentMethod(item);
                          }}
                        />
                      )
                    }
                  />
                </View>
                <Space mT={20} />
              </>
            );
          })
        ) : (
          <></>
        )}
        <Space mT={20} />
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
