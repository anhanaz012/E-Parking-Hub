import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch} from 'react-redux';
import {SVG} from '../../../../assets/svg';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppText from '../../../../components/AppText/AppText';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import {verticalEntryExitDirection} from '../../../../data/appData';
import {LABELS} from '../../../../labels';
import {ERRORS} from '../../../../labels/error';
import {setSpaceData} from '../../../../store/slices/authSlice';
import {Toast} from '../../../../utils/native';
import {isSpaceDetailsValid} from '../../../../utils/validation';
import {styles} from './styles';
const SpaceDetailsScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles(theme);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [vendorData, setVendorData] = useState();
  const [loginToken, setLoginToken] = useState();
  console.log(loginToken);
  useEffect(() => {
    const getLoginToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('vendorLoginToken');
        setLoginToken(userToken);
        const getVendorData = async () => {
          const user = await firestore()
            .collection('Vendors')
            .doc(userToken)
            .get();
          setVendorData(user.data());
        };
        getVendorData();
      } catch (err) {
        console.log('error in getting token', err);
      }
    };
    getLoginToken();
    const onBackPress = () => {
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
  const [initialFormValues, setInitialFormValues] = useState({
    spaceName: '',
    address: '',
    noOfRows: '',
    noOfLots: '',
    price: '',
    entryExitDirection: '',
  });
  const handleFormValues = (inputName, value) => {
    setInitialFormValues(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  const SpaceDetailsHandler = async () => {
    const {spaceName, address, noOfRows, noOfLots, price, entryExitDirection} =
      initialFormValues;
    if (
      !spaceName &&
      !address &&
      !noOfRows &&
      !noOfLots &&
      !price &&
      !entryExitDirection
    ) {
      Toast(ERRORS.emptyForm);
    } else {
      if (
        isSpaceDetailsValid({
          spaceName,
          address,
          noOfRows,
          noOfLots,
          price,
          entryExitDirection,
        })
      ) {
        const noOfCols = noOfLots / noOfRows;
        if (noOfCols % 1 !== 0) {
          Toast(ERRORS.columnsNotDivisible);
        } else {
          const formValues = {...initialFormValues, noOfColumns: noOfCols};
          if (vendorData && loginToken) {
            const allData = {...vendorData, formValues,isApproved:true,count:0};
            setIsLoading(true);
            await firestore()
              .collection('ParkingAreas')
              .doc(loginToken)
              .set(allData);
            await firestore()
              .collection('Vendors')
              .doc(loginToken)
              .set(allData);
            dispatch(setSpaceData(formValues));
            setInitialFormValues({
              spaceName: '',
              address: '',
              noOfRows: '',
              noOfLots: '',
              price: '',
              entryExitDirection: '',
            });
            setIsLoading(false);
            setTimeout(() => {
              navigation.navigate('VendorAuthStack', {
                screen: 'AreaPictureUpload',
              });
            }, 1000);
          } else {
            Toast(ERRORS.somethingWent);
          }
        }
      }
    }
  };
  return (
    <>
      <ScrollView
        style={[STYLES.bgColor(COLORS[theme].background), STYLES.flex1]}>
        <AppHeader
          theme={theme}
          mL={15}
          title={LABELS.step1}
          fontFamily={Fonts.latoRegular}
          iconLeft={
            <SVG.leftArrow height={20} width={20} fill={COLORS[theme].text} />
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
          <Space mT={30} />
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
            placeholder={LABELS.pricePerHour}
            theme={theme}
            keyboardType={'numeric'}
            value={initialFormValues.price}
            onChangeText={value => {
              handleFormValues('price', value);
            }}
          />
          <Space mT={40} />
          <GradientButton
            title={'Save'}
            textColor={'white'}
            textVariant={'h5'}
            fontFamily={Fonts.mavenRegular}
            onPress={SpaceDetailsHandler}
          />
          <Space mT={20} />
        </View>
        <Space mT={25} />
      </ScrollView>
    </>
  );
};

export default SpaceDetailsScreen;
