import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';

const AppInput = props => {
  const {
    placeholder = '',
    placeholderTextColor,
    keyboardType = 'default',
    secureTextEntry = false,
    onChangeText = () => {},
    value,
    extraStyle = {},
    multiline = false,
    numberOfLines = 1,
    autoCorrect = false,
    autoFocus = false,
    iconLeft = null,
    iconRight = null,
    onLeftIconPress = () => {},
    onFocus = () => {},
    isFocused,
    onBlur = () => {},
    mL = 0,
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
        {iconLeft && (
          <>
            <Space mL={mL} />
            {/* <Icon iconLeft={true} SVGIcon={iconLeft} onPress = {onLeftIconPress}/> */}
            <Icon SVGIcon = {iconLeft}/>
          </>
        )}
        <TextInput
          {...props}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
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
