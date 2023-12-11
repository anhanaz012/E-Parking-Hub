import React from 'react';
import {ScrollView, View} from 'react-native';
import {IMAGES} from '../../../../assets/images';
import {SVG} from '../../../../assets/svg';
import {COLORS, Fonts, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';
import {LABELS} from '../../../../labels';
import {styles} from './styles';

const HomeScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles;
  return (
    <ScrollView style={[STYLES.flex1]}>
      <AppHeader
        title={LABELS.location}
        theme={theme}
        textVariant={'body2'}
        fontFamily={Fonts.mavenRegular}
        children={
          <>
            <AppText
              title={'Los Angeles, California US'}
              theme={theme}
              color={COLORS.dark.secondary}
              fontFamily={Fonts.merriWeatherBold}
              variant={'h5'}
            />
          </>
        }
        mL={15}
        iconLeft={<SVG.location fill={'black'} height={20} width={20} />}
      />

      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <AppInput
          theme={theme}
          placeholder={'Find Parking'}
          iconLeft={<SVG.search fill={'grey'} height={15} width={15} />}
          extraStyle={{
            textInputContainer: {backgroundColor: 'white', elevation: 5},
            textInput: {
              fontSize: 14,
              backgroundColor: 'white',
              fontFamily: Fonts.mavenRegular,
            },
          }}
          mL={6}
        />
        <Space mT={30} />
        <View
          style={[STYLES.width('100%'), STYLES.rowCenterBt, STYLES.AICenter]}>
          <AppText
            title={LABELS.popularLocations}
            theme={theme}
            color={'black'}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'h3'}
          />
          <AppText
            title={'See all'}
            theme={theme}
            color={COLORS[theme].primary}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'body2'}
            onPress={() => {
              navigation.navigate('HomeStack', {screen: 'AreasListScreen'});
            }}
          />
        </View>
        <Space mT={20} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[STYLES.height(220)]}>
          <View style={style.horizontalCardContainer}>
            <AppLogo
              source={IMAGES.parkingHome}
              height={'50%'}
              width={'100%'}
              extraStyle={[STYLES.bR(20)]}
            />
            <Space mT={10} />
            <View style={[STYLES.height('45%'), STYLES.JCCenter]}>
              <AppText
                title={'Liecester Square'}
                theme={theme}
                variant={'h4'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
              <Space mT={2} />
              <AppText
                title={'39-42 WhiteComb Street'}
                theme={theme}
                extraStyle={{fontSize: 12}}
                color={'grey'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mT={10} />
              <View style={[STYLES.rowCenterBt]}>
                <AppText
                  title={'$ 4.25/hr'}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
                <GradientButton
                  theme={theme}
                  extraStyle={{
                    btnContainer: {
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                      backgroundColor: 'transparent',
                      elevation: 0,
                    },
                  }}
                  iconLeft={
                    <SVG.boxrightarrow fill={'white'} height={17} width={17} />
                  }
                  onPress={() => {
                    navigation.navigate('HomeStack', {
                      screen: 'ChooseParkingSlot',
                    });
                  }}
                />
              </View>
            </View>
          </View>
          <Space mL={20} />

          <View style={style.horizontalCardContainer}>
            <AppLogo
              source={IMAGES.parkingHome}
              height={'50%'}
              width={'100%'}
              extraStyle={[STYLES.bR(20)]}
            />
            <Space mT={10} />
            <View style={[STYLES.height('45%'), STYLES.JCCenter]}>
              <AppText
                title={'Liecester Square'}
                theme={theme}
                variant={'h4'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
              <Space mT={2} />
              <AppText
                title={'39-42 WhiteComb Street'}
                theme={theme}
                extraStyle={{fontSize: 12}}
                color={'grey'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mT={10} />
              <View style={[STYLES.rowCenterBt]}>
                <AppText
                  title={'$ 4.25/hr'}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
                <GradientButton
                  onPress={() => {
                    navigation.navigate('HomeStack', {
                      screen: 'AreasListScreen',
                    });
                  }}
                  theme={theme}
                  extraStyle={{
                    btnContainer: {
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                    },
                  }}
                  iconLeft={
                    <SVG.leftArrow fill={'white'} height={15} width={15} />
                  }
                />
              </View>
            </View>
          </View>

          <Space mL={20} />
          <View style={style.horizontalCardContainer}>
            <AppLogo
              source={IMAGES.parkingHome}
              height={'50%'}
              width={'100%'}
              extraStyle={[STYLES.bR(20)]}
            />
            <Space mT={10} />
            <View style={[STYLES.height('45%'), STYLES.JCCenter]}>
              <AppText
                title={'Liecester Square'}
                theme={theme}
                variant={'h4'}
                fontFamily={Fonts.merriWeatherSansRegular}
              />
              <Space mT={2} />
              <AppText
                title={'39-42 WhiteComb Street'}
                theme={theme}
                extraStyle={{fontSize: 12}}
                color={'grey'}
                fontFamily={Fonts.latoRegular}
              />
              <Space mT={10} />
              <View style={[STYLES.rowCenterBt]}>
                <AppText
                  title={'$ 4.25/hr'}
                  theme={theme}
                  fontFamily={Fonts.merriWeatherSansRegular}
                />
                <GradientButton
                  onPress={() => {
                    navigation.navigate('HomeStack', {
                      screen: 'AreasListScreen',
                    });
                  }}
                  theme={theme}
                  extraStyle={{
                    btnContainer: {
                      height: 30,
                      width: 30,
                      borderRadius: 15,
                    },
                  }}
                  iconLeft={
                    <SVG.leftArrow fill={'white'} height={15} width={15} />
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={[STYLES.width('100%'), STYLES.rowCenterBt, STYLES.AICenter]}>
          <AppText
            title={LABELS.recentPlaces}
            theme={theme}
            color={'black'}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'h3'}
          />
          <AppText
            title={'See all'}
            theme={theme}
            color={COLORS[theme].primary}
            fontFamily={Fonts.merriWeatherSansRegular}
            variant={'body2'}
            onPress={() => {
              navigation.navigate('HomeStack', {screen: 'AreasListScreen'});
            }}
          />
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

        <Space mT={20} />

        <View style={style.verticalCardContainer}>
          <AppLogo
            source={IMAGES.parkingHome}
            height={'85%'}
            width={'30%'}
            extraStyle={{borderRadius: 20}}
          />
          <View
            style={[
              STYLES.JCCenter,
              STYLES.width('70%'),
              STYLES.pH(HORIZON_MARGIN),
            ]}>
            <AppText
              title={'License Square'}
              theme={theme}
              variant={'h4'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
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
          <View
            style={[
              STYLES.JCCenter,
              STYLES.width('70%'),
              STYLES.pH(HORIZON_MARGIN),
            ]}>
            <AppText
              title={'License Square'}
              theme={theme}
              variant={'h4'}
              fontFamily={Fonts.merriWeatherSansRegular}
            />
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
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
