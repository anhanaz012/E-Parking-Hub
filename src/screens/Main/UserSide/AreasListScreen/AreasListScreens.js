import React from 'react';
import { ScrollView, View } from 'react-native';
import { IMAGES } from '../../../../assets/images';
import { SVG } from '../../../../assets/svg';
import { Fonts, HORIZON_MARGIN, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { styles } from './styles';

const AreasListScreens = ({navigation}) => {
  const theme = 'light';
  const style = styles;
  return (
    <>
      <ScrollView style={[STYLES.flex1]}>
        <AppHeader
          iconLeft={<SVG.leftArrow height={20} width={20} fill={'black'} />}
          theme={'light'}
          title={LABELS.AllList}
          mL={15}
          onLeftIconPress = {()=>{navigation.goBack()}}
        />
        <View style={[STYLES.pH(HORIZON_MARGIN)]}>
          <View style={style.verticalCardContainer}>
            <AppLogo
              source={IMAGES.parkingHome}
              height={'85%'}
              width={'30%'}
              extraStyle={{borderRadius: 20}}
            />
            <View style={[STYLES.JCCenter, STYLES.width('70%'), STYLES.pH(10)]}>
              <View style={[STYLES.row, STYLES.width('100%')]}>
                <View style={[STYLES.width('80%')]}>
                  <AppText
                    title={'License Square'}
                    theme={theme}
                    variant={'h4'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                </View>
                <View style={[STYLES.width('20%'), STYLES.row, STYLES.JCEnd]}>
                  <Icon
                    SVGIcon={
                      <SVG.rightarrow fill={'purple'} height={18} width={18} />
                    }
                    onPress={() => {
                      console.log('test');
                    }}
                  />
                </View>
              </View>

              <Space mT={5} />
              <AppText
                title={'1669 Phili , South sanjese, Washington'}
                theme={theme}
                extraStyle={[STYLES.fontSize(13)]}
                color={'gray'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mT={5} />
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon SVGIcon={<SVG.starFilled fill={'orange'} />} />
                  <Space mL={5} />
                  <AppText
                    title={'4.5'}
                    theme={theme}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                </View>
                <AppText
                  title={'$ 4.25/hr'}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
              </View>
            </View>
          </View>
          <Space mT={20} />
          <View style={style.verticalCardContainer}>
            <AppLogo
              source={IMAGES.parkingHome}
              height={'85%'}
              width={'30%'}
              extraStyle={{borderRadius: 20}}
            />
            <View style={[STYLES.JCCenter, STYLES.width('70%'), STYLES.pH(10)]}>
              <View style={[STYLES.row, STYLES.width('100%')]}>
                <View style={[STYLES.width('80%')]}>
                  <AppText
                    title={'License Square'}
                    theme={theme}
                    variant={'h4'}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                </View>
                <View style={[STYLES.width('20%'), STYLES.row, STYLES.JCEnd]}>
                  <Icon
                    SVGIcon={
                      <SVG.rightarrow fill={'purple'} height={18} width={18} />
                    }
                    onPress={() => {
                      console.log('test');
                    }}
                  />
                </View>
              </View>

              <Space mT={5} />
              <AppText
                title={'1669 Phili , South sanjese, Washington'}
                theme={theme}
                extraStyle={[STYLES.fontSize(13)]}
                color={'gray'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mT={5} />
              <View style={[STYLES.rowCenterBt]}>
                <View style={[STYLES.row]}>
                  <Icon SVGIcon={<SVG.starFilled fill={'orange'} />} />
                  <Space mL={5} />
                  <AppText
                    title={'4.5'}
                    theme={theme}
                    fontFamily={Fonts.merriWeatherSansRegular}
                  />
                </View>
                <AppText
                  title={'$ 4.25/hr'}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AreasListScreens;
