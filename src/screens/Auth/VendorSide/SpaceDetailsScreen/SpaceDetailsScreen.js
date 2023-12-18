import React, {useState} from 'react';
import {ScrollView, View,Text} from 'react-native';
import {SVG} from '../../../../assets/svg';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {Dropdown} from 'react-native-element-dropdown';
import {LABELS} from '../../../../labels';
import {styles} from './styles';
import Icon from '../../../../components/Icon/Icon';
const SpaceDetailsScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <>
      <ScrollView
        style={[STYLES.bgColor(COLORS[theme].background), STYLES.flex1]}>
        <AppHeader
          theme={theme}
          iconLeft={
            <SVG.leftArrow height={25} width={25} fill={COLORS[theme].text} />
          }
          onLeftIconPress={() => {
            navigation.goBack();
          }}
        />
        <Space mT={10} />

        <View style={[STYLES.pH(20)]}>
          {renderLabel()}
          <Dropdown
            // style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            // placeholderStyle={styles.placeholderStyle}
            // selectedTextStyle={styles.selectedTextStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            // iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              // <AntDesign
              //   style={styles.icon}
              //   color={isFocus ? 'blue' : 'black'}
              //   name="Safety"
              //   size={20}
              // />
              <Icon SVGIcon={<SVG.bell fill="black" />} />
            )}
          />
          <View style={[STYLES.height('15%')]}>
            <AppText
              title={LABELS.addSpace}
              variant={'h1'}
              fontFamily={Fonts.merriWeatherSansRegular}
              color={COLORS[theme].text}
            />
            <AppText
              title={LABELS.details}
              variant={'h1'}
              color={COMMON_COLORS.secondary}
            />
          </View>
          <Space mT={40} />

          <AppInput placeholder={LABELS.spaceName} theme={theme} />
          <Space mT={20} />
          <AppInput placeholder={'Address'} theme={theme} mL={10} />

          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfRows}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfLots}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.latitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.longitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
          />
          <Space mT={20} />
          <GradientButton
            title={'Save'}
            textColor={'white'}
            textVariant={'h5'}
            fontFamily={Fonts.mavenRegular}
            onPress={() => {
              navigation.navigate('VendorBottomNavigation', {screen: 'Home'});
            }}
          />
          <Space mT={25} />
        </View>
        <Space mT={25} />
      </ScrollView>
    </>
  );
};

export default SpaceDetailsScreen;
