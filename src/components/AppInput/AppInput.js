import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';
import {COLORS} from '../../assets/theme';

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
    autoFocus = false,
    iconLeft = null,
    iconRight = null,
    onLeftIconPress = () => {},
    onRightIconPress = () => {},
    onFocus = () => {},
    isFocused = false,
    onBlur = () => {},
    mL = 0,
    theme,
    maxLength,
    cursorColor
  } = props;
  const style = styles(theme);
  return (
    <>
      <View
        style={[
          style.textInputContainer(multiline, isFocused),
          extraStyle.textInputContainer,
        ]}>
        {iconLeft && (
          <>
            <Icon SVGIcon={iconLeft} iconLeft={true} onPress = {onLeftIconPress}/>
            <Space mL={mL} />
          </>
        )}
        <TextInput
        maxLength={maxLength}
        cursorColor={cursorColor}
          {...props}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor
              ? placeholderTextColor
              : COLORS[theme].placeholderTextColor
          }
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          multiline={multiline}
          style={[style.textInput(multiline, isFocused), extraStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {iconRight && (
          <>
            <Icon SVGIcon={iconRight} iconLeft={false} onPress = {onRightIconPress}/>
          </>
        )}
      </View>
    </>
  );
};

export default AppInput;
