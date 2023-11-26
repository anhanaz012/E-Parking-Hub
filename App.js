import React from 'react';
import { View } from 'react-native';
import { SVG } from './src/assets/svg';
import { COLORS } from './src/assets/theme';
import AppInput from './src/components/AppInput/AppInput';
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
        <AppInput
          onFocus={handleFocus}
          placeholder={'Enter your name'}
          onBlur={handleBlur}
          isFocused={isFocused}
          theme={'light'}
          iconLeft={<SVG.lock height={20} width={20} fill={'grey'} />}
        />
      </View>
    </>
  );
};

export default App;
