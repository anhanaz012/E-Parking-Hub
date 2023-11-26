import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

const AppInput = props => {
  const {
    placeholder = '',
    placeholderTextColor = 'black',
    keyboardType = 'default',
    secureTextEntry = false,
    onChangeText = () => {},
    value,
    extraStyle = {},
    multiline = false,
    numberOfLines = 1,
    autoCorrect = false,
    autoFocus = false,
    leftIcon = null,
    rightIcon = null,
    onFocus = () => {},
    isFocused,
    onBlur = () => {},
    theme,
  } = props;
  const style = styles(theme);
  return (
    <>
      <View
        style={[
          style.textInputContainer(multiline),
          extraStyle.textInputContainer,
        ]}>
        <TextInput
          {...props}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType = {keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          multiline={multiline}
          style={[style.textInput(multiline, isFocused), extraStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </>
  );
};

export default AppInput;
