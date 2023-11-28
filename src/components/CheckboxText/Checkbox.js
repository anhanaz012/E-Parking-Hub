import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {COLORS, COMMON_COLORS, Fonts, STYLES} from '../../assets/theme';
import AppText from '../AppText/AppText';

const CheckboxText = ({onPressTerms, onPressPrivacy, theme}) => {
  return (
    <View style={STYLES.row}>
      <AppText
        title={'I agree to the '}
        color={COLORS[theme].termsText}
        extraStyle={[STYLES.fontFamily(Fonts.mavenRegular),STYLES.fontSize(13)]}
      />
      <TouchableOpacity onPress={onPressTerms}>
        <AppText
          title={'Terms '}
          color={COMMON_COLORS.secondary}
          extraStyle={[STYLES.fontFamily(Fonts.mavenRegular)]}
          onPress={onPressTerms}
        />
      </TouchableOpacity>

      <AppText
        title={'of use and '}
        color={COLORS[theme].termsText}
        extraStyle={[STYLES.fontFamily(Fonts.mavenRegular)]}
      />
      <TouchableOpacity onPress={onPressPrivacy}>
        <AppText
          title={'Privacy Policy'}
          color={COMMON_COLORS.secondary}
          extraStyle={[STYLES.fontFamily(Fonts.mavenRegular)]}
          onPress={onPressPrivacy}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CheckboxText;
