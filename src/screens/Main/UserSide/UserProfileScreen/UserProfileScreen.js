import React from 'react';
import {ScrollView, View} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {
  COLORS,
  Fonts,
  HEIGHT,
  HORIZON_MARGIN,
  STYLES,
} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import {LABELS} from '../../../../labels';
import AppText from '../../../../components/AppText/AppText';
import {styles} from './styles';
import Icon from '../../../../components/Icon/Icon';
import Space from '../../../../components/Space/Space';

const UserProfileScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles;
  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.profile}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={10}
      />
      <Space mT={20} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <AppText
          title={LABELS.personalInfo}
          theme={theme}
          fontFamily={Fonts.merriWeatherSansRegular}
          variant={'h3'}
        />
        <Space mT={20} />
        <View style={style.infoContainer}>
          <Icon
            SVGIcon={
              <SVG.user fill={COLORS.light.grey} height={15} width={15} />
            }
          />
          <Space mL={15} />
          <AppText
            title={'John Doe'}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <View style={style.infoContainer}>
          <Icon
            SVGIcon={
              <SVG.phone fill={COLORS.light.grey} height={15} width={15} />
            }
          />
          <Space mL={15} />
          <AppText
            title={'+44 314354321'}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <View style={style.logoutContainer}>
          <Icon
            SVGIcon={<SVG.at fill={COLORS.light.grey} height={15} width={15} />}
          />
          <Space mL={15} />
          <AppText
            title={'JohnDoe@gamil.com'}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <Space mT={30} />
        <AppText
          title={LABELS.VehicleDetails}
          theme={theme}
          fontFamily={Fonts.merriWeatherSansRegular}
          variant={'h3'}
        />
        <Space mT={20} />
        <View style={style.infoContainer}>
          <Icon
            SVGIcon={
              <SVG.carIcon fill={COLORS.light.grey} height={20} width={20} />
            }
          />
          <Space mL={15} />
          <AppText
            title={'Ford Mustang'}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <View style={style.infoContainer}>
          <Icon
            SVGIcon={
              <SVG.carNumber fill={COLORS.light.grey} height={20} width={20} />
            }
          />
          <Space mL={15} />
          <AppText
            title={'ABC 1234'}
            theme={theme}
            color={COLORS.light.grey}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
          />
        </View>
        <View style={style.logoutContainer}>
          <Icon SVGIcon={<SVG.logout fill={'red'} height={20} width={20} />} />
          <Space mL={15} />
          <AppText
            title={LABELS.logout}
            theme={theme}
            color={'red'}
            fontFamily={Fonts.latoRegular}
            variant={'h4'}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
