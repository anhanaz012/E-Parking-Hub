// import firestore from '@react-native-firebase/firestore';
// import React, {useState} from 'react';
// import {ScrollView, View} from 'react-native';
// import {useSelector} from 'react-redux';
// import {IMAGES} from '../../../../assets/images';
// import {SVG} from '../../../../assets/svg';
// import {Fonts, HEIGHT, HORIZON_MARGIN, STYLES} from '../../../../assets/theme';
// import AppHeader from '../../../../components/AppHeader/AppHeader';
// import AppInput from '../../../../components/AppInput/AppInput';
// import AppLogo from '../../../../components/AppLogo/AppLogo';
// import AppText from '../../../../components/AppText/AppText';
// import FeedbackStars from '../../../../components/FeedbackStars/FeedbackStars';
// import GradientButton from '../../../../components/GradientButton/GradientButton';
// import ModalBox from '../../../../components/ModalBox/ModalBox';
// import Space from '../../../../components/Space/Space';
// import {LABELS} from '../../../../labels';
// import {Toast} from '../../../../utils/native';
// import {styles} from './styles';
// const AddFeedbackScreen = ({navigation}) => {
//   const [starCount, setStarCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const bookingData = useSelector(state => state.booking.selectedArea);
//   const {vendorToken} = bookingData;
//   const theme = 'light';
//   const style = styles;
//   const starCountHandler = count => {
//     setStarCount(count);
//   };
//   const submitFeedbackHandler = async () => {
//     if (starCount == 0) {
//       Toast('Please select stars');
//     } else {
//       setIsLoading(true);
//       try {
//         const user = await firestore()
//           .collection('ParkingAreas')
//           .doc(vendorToken)
//           .get();
//         const vendorData = user.data();
//         const feedback = {
//           noOfStars: 0,
//           noOfRatings: 0,
//         };
//         if (vendorData && vendorData.feedback) {
//           const totalStars = vendorData.feedback.noOfStars + starCount;
//           const totalRatings = vendorData.feedback.noOfRatings + 1;
//           feedback.noOfStars = totalStars;
//           feedback.noOfRatings = totalRatings;
//           const averageRating = totalStars / totalRatings;
//           feedback.averageRating = averageRating;
//         } else {
//           feedback.noOfStars = starCount;
//           feedback.noOfRatings = 1;
//           feedback.averageRating = starCount;
//         }
//         await firestore()
//           .collection('ParkingAreas')
//           .doc(vendorToken)
//           .update({feedback});

//         setIsLoading(false);
//         navigation.navigate('BottomNavigation', {screen: 'Home'});
//       } catch (error) {
//         setIsLoading(false);
//         console.error('Error updating feedback:', error);
//       }
//     }
//   };
//   return (
//     <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
//       <AppHeader
//         theme={theme}
//         iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
//         title={LABELS.addFeedback}
//         onLeftIconPress={() => {
//           navigation.goBack();
//         }}
//         mL={15}
//       />
//       <ModalBox isVisible={isLoading} />
//       <Space mT={30} />
//       <View style={[STYLES.pH(HORIZON_MARGIN)]}>
//         <AppLogo source={IMAGES.chair} resizeMode={'contain'} />
//         <Space mT={30} />
//         <AppText
//           title={LABELS.feedbackQues}
//           theme={theme}
//           fontFamily={Fonts.merriWeatherBold}
//           variant={'h3'}
//           textAlign={'center'}
//         />
//         <Space mT={20} />
//         <AppText
//           title={LABELS.feedbackSubHeading}
//           theme={theme}
//           textAlign={'center'}
//           fontFamily={Fonts.mavenRegular}
//           variant={'h5'}
//         />
//         <Space mT={30} />
//         <FeedbackStars onChange={starCountHandler} />
//         <Space mT={50} />
//         <AppInput
//           placeholder={LABELS.feedbackPlaceholder}
//           theme={'light'}
//           multiline={true}
//           numberOfLines={3}
//           maxLength={150}
//           extraStyle={{
//             textInputContainer: [style.textInputContainer],
//             textInput: [style.textInput],
//           }}
//         />
//         <Space mT={30} />
//         <GradientButton
//           title={'Submit'}
//           theme={'light'}
//           textColor={'white'}
//           textVariant={'h4'}
//           onPress={submitFeedbackHandler}
//         />
//       </View>
//       <Space mT={20} />
//     </ScrollView>
//   );
// };

// export default AddFeedbackScreen;



// AddFeedbackScreen.js

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IMAGES } from '../../../../assets/images';
import { SVG } from '../../../../assets/svg';
import { Fonts, HEIGHT, HORIZON_MARGIN, STYLES } from '../../../../assets/theme';
import AppHeader from '../../../../components/AppHeader/AppHeader';
import AppInput from '../../../../components/AppInput/AppInput';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import AppText from '../../../../components/AppText/AppText';
import FeedbackStars from '../../../../components/FeedbackStars/FeedbackStars';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import ModalBox from '../../../../components/ModalBox/ModalBox';
import Space from '../../../../components/Space/Space';
import { LABELS } from '../../../../labels';
import { Toast } from '../../../../utils/native';
import { styles } from './styles';
import firestore from '@react-native-firebase/firestore';

const AddFeedbackScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const bookingData = useSelector(state => state.booking.selectedArea);
  const { vendorToken } = bookingData;
  const [starCount, setStarCount] = useState(0); // Move starCount state to parent component

  const theme = 'light';
  const style = styles;

  const starCountHandler = count => {
    setStarCount(count); // Update starCount state in the parent component
  };

  const submitFeedbackHandler = async () => {
    if (starCount === 0) {
      Toast('Please select stars');
    } else {
      setIsLoading(true);
      try {
        const user = await firestore()
          .collection('ParkingAreas')
          .doc(vendorToken)
          .get();
        const vendorData = user.data();
        const feedback = {
          noOfStars: 0,
          noOfRatings: 0,
        };
        if (vendorData && vendorData.feedback) {
          const totalStars = vendorData.feedback.noOfStars + starCount;
          const totalRatings = vendorData.feedback.noOfRatings + 1;
          feedback.noOfStars = totalStars;
          feedback.noOfRatings = totalRatings;
          const averageRating = totalStars / totalRatings;
          feedback.averageRating = averageRating;
        } else {
          feedback.noOfStars = starCount;
          feedback.noOfRatings = 1;
          feedback.averageRating = starCount;
        }
        await firestore()
          .collection('ParkingAreas')
          .doc(vendorToken)
          .update({ feedback });

        setIsLoading(false);
        navigation.navigate('BottomNavigation', { screen: 'Home' });
      } catch (error) {
        setIsLoading(false);
        console.error('Error updating feedback:', error);
      }
    }
  };

  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.addFeedback}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={15}
      />
     {isLoading && <ModalBox isVisible={isLoading}/>}
      <Space mT={30} />
      <View style={[STYLES.pH(HORIZON_MARGIN)]}>
        <AppLogo source={IMAGES.chair} resizeMode={'contain'} />
        <Space mT={30} />
        <AppText
          title={LABELS.feedbackQues}
          theme={theme}
          fontFamily={Fonts.merriWeatherBold}
          variant={'h3'}
          textAlign={'center'}
        />
        <Space mT={20} />
        <AppText
          title={LABELS.feedbackSubHeading}
          theme={theme}
          textAlign={'center'}
          fontFamily={Fonts.mavenRegular}
          variant={'h5'}
        />
        <Space mT={30} />
        <FeedbackStars onChange={starCountHandler} starCount={starCount} />
        <Space mT={50} />
        <AppInput
          placeholder={LABELS.feedbackPlaceholder}
          theme={'light'}
          multiline={true}
          numberOfLines={3}
          maxLength={150}
          extraStyle={{
            textInputContainer: [style.textInputContainer],
            textInput: [style.textInput],
          }}
        />
        <Space mT={30} />
        <GradientButton
          title={'Submit'}
          theme={'light'}
          textColor={'white'}
          textVariant={'h4'}
          onPress={submitFeedbackHandler}
        />
      </View>
      <Space mT={20} />
    </ScrollView>
  );
};

export default AddFeedbackScreen;
