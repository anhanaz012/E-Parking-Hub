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
import Space from '../../../../components/Space/Space';
import AppText from '../../../../components/AppText/AppText';
import AppInput from '../../../../components/AppInput/AppInput';
import FeedbackStars from '../../../../components/FeedbackStars/FeedbackStars';
import AppLogo from '../../../../components/AppLogo/AppLogo';
import {IMAGES} from '../../../../assets/images';
import GradientButton from '../../../../components/GradientButton/GradientButton';
import {styles} from './styles';

const AddFeedbackScreen = ({navigation}) => {
  const theme = 'light';
  const style = styles;
  return (
    <ScrollView style={[STYLES.height(HEIGHT), STYLES.bgColor('white')]}>
      <AppHeader
        theme={theme}
        iconLeft={<SVG.leftArrow fill={'black'} height={20} width={20} />}
        title={LABELS.addFeedback}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
        mL={10}
      />
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
        <FeedbackStars />
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
        />
      </View>
    </ScrollView>
  );
};

export default AddFeedbackScreen;
