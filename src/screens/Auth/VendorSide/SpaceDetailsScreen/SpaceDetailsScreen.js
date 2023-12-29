import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import Space from '../../../../components/Space/Space';
import {
  rowsPosition,
  verticalEntryExitDirection,
} from '../../../../data/appData';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {Toast} from '../../../../utils/native';
import {isSpaceDetailsValid} from '../../../../utils/validation';
import {styles} from './styles';
import ModalBox from '../../../../components/ModalBox/ModalBox';
const SpaceDetailsScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [vendorData, setVendorData] = useState();
  const loginToken = useSelector(state => state.auth.loginToken);
  useEffect(() => {
    console.log('loginToken', loginToken);
    setTimeout(() => {
      const getVendorData = async () => {
        const user = await firestore()
          .collection('Vendors')
          .doc(loginToken)
          .get();
        setVendorData(user.data());
        console.log('vendorData', vendorData);
      };
      getVendorData();
    }, 1000);
  }, []);
  const [initialFormValues, setInitialFormValues] = useState({
    spaceName: '',
    address: '',
    noOfRows: '',
    noOfLots: '',
    latitudeOfArea: '',
    longitudeOfArea: '',
    price: '',
    rowsDirection: '',
    entryExitDirection: '',
  });
  const handleFormValues = (inputName, value) => {
    setInitialFormValues(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  const SpaceDetailsHandler = async () => {
    const {
      spaceName,
      address,
      noOfRows,
      noOfLots,
      latitudeOfArea,
      longitudeOfArea,
      price,
      rowsDirection,
      entryExitDirection,
    } = initialFormValues;
    if (
      !spaceName &&
      !address &&
      !noOfRows &&
      !noOfLots &&
      !latitudeOfArea &&
      !longitudeOfArea &&
      !price &&
      !rowsDirection &&
      !entryExitDirection
    ) {
      Toast(ERRORS.emptyForm);
    } else {
      isSpaceDetailsValid({
        spaceName,
        address,
        noOfRows,
        noOfLots,
        latitudeOfArea,
        longitudeOfArea,
        price,
        rowsDirection,
        entryExitDirection,
      });
      const noOfCols = noOfLots / noOfRows;
      if (noOfCols % 1 !== 0) {
        Toast(ERRORS.columnsNotDivisible);
      } else {
        const formValues = {...initialFormValues, noOfColumns: noOfCols};
        setIsLoading(true);
        await firestore()
          .collection('Vendors')
          .doc(loginToken)
          .set({...vendorData, formValues});
        await firestore()
          .collection('ParkingAreas')
          .doc(loginToken)
          .set({...vendorData, formValues})
          .then(() => {
            setInitialFormValues({
              spaceName: '',
              address: '',
              noOfRows: '',
              noOfLots: '',
              latitudeOfArea: '',
              longitudeOfArea: '',
              price: '',
              rowsDirection: '',
              entryExitDirection: '',
            });
            setIsLoading(false);
            navigation.navigate('VendorAuthStack', {
              screen: 'AreaPictureUpload',
            });
          });
      }
    }
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
        {isLoading && <ModalBox isVisible={isLoading} />}
        <View style={[STYLES.pH(20)]}>
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
          <Space mT={10} />
          <AppInput
            placeholder={LABELS.spaceName}
            theme={theme}
            value={initialFormValues.spaceName}
            onChangeText={value => {
              handleFormValues('spaceName', value);
            }}
          />
          <Space mT={20} />
          <AppInput
            placeholder={'Address'}
            theme={theme}
            mL={10}
            value={initialFormValues.address}
            onChangeText={value => {
              handleFormValues('address', value);
            }}
          />

          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfRows}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.noOfRows}
            onChangeText={value => {
              handleFormValues('noOfRows', value);
            }}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.noOfLots}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.noOfLots}
            onChangeText={value => {
              handleFormValues('noOfLots', value);
            }}
          />
          <Space mT={20} />
          <Dropdown
            style={style.containerStyle}
            placeholderStyle={style.placeholderStyle}
            data={rowsPosition}
            selectedTextStyle={STYLES.fontSize(14)}
            search={false}
            showsVerticalScrollIndicator={false}
            maxHeight={300}
            labelField="title"
            valueField="title"
            placeholder={'Select Rows Position'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={initialFormValues.rowsDirection}
            onChange={value => {
              handleFormValues('rowsDirection', value.title);
            }}
            dropdownPosition="bottom"
          />
          <Space mT={20} />
          <Dropdown
            style={style.containerStyle}
            placeholderStyle={style.placeholderStyle}
            data={verticalEntryExitDirection}
            selectedTextStyle={STYLES.fontSize(14)}
            search={false}
            showsVerticalScrollIndicator={false}
            maxHeight={300}
            labelField="title"
            valueField="title"
            placeholder={'Select Entry Exit Directions'}
            value={initialFormValues.rowsDirection}
            onChange={value => {
              handleFormValues('entryExitDirection', value.title);
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            dropdownPosition="bottom"
          />
          <Space mT={20} />

          <AppInput
            placeholder={LABELS.latitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.latitudeOfArea}
            onChangeText={value => {
              handleFormValues('latitudeOfArea', value);
            }}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.longitudeOfArea}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.longitudeOfArea}
            onChangeText={value => {
              handleFormValues('longitudeOfArea', value);
            }}
          />
          <Space mT={20} />
          <AppInput
            placeholder={LABELS.pricePerHour}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.price}
            onChangeText={value => {
              handleFormValues('price', value);
            }}
          />
          <Space mT={50} />
          <GradientButton
            title={'Save'}
            textColor={'white'}
            textVariant={'h5'}
            fontFamily={Fonts.mavenRegular}
            onPress={
              SpaceDetailsHandler
              // navigation.navigate('VendorBottomNavigation', {screen: 'Home'});
            }
          />
          <Space mT={25} />
        </View>
        <Space mT={25} />
      </ScrollView>
    </>
  );
};

export default SpaceDetailsScreen;
