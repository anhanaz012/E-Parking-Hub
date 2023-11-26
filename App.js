import React from 'react';
import {View} from 'react-native';
import {SVG} from './src/assets/svg';
import {COLORS} from './src/assets/theme';
import AppInput from './src/components/AppInput/AppInput';
import AppText from './src/components/AppText/AppText';
import Icon from './src/components/Icon/Icon';
const App = () => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.light.background,
        }}>
        <AppText
          title={'hello world'}
          color={COLORS.dark.secondary}
          variant="h1"
          onPress={() => {
            console.log('hello there');
          }}
        />
        <AppInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          theme={'light'}
        />
        <Icon
          SVGIcon={<SVG.location fill={'white'} height={16} width={16} />}
          alignSelf={'center'}
          activeOpacity={0.8}
          extraStyle={{
            text: {color: COLORS.dark.secondary},
            icon: {
              height: 45,
              width: '12%',
              backgroundColor: COLORS.dark.secondary,
              flexDirection: 'row',
              borderRadius: 10,
            },
          }}
        />
      </View>
    </>
  );
};

export default App;
