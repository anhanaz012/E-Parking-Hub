import React, {useEffect, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {COMMON_COLORS} from '../../assets/theme';

const OTPInput = ({length, onChangeText, value}) => {
  const inputs = Array(length).fill(0);
  const inputRefs = Array(length)
    .fill(0)
    .map((_, i) => useRef(null));
  const [focusedIndex, setFocusedIndex] = useState(0);

  const focusInput = index => {
    if (inputRefs[index] && inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  const handleInputChange = (index, text) => {
    if (text) {
      onChangeText(index, text);
      if (index < length - 1) {
        focusInput(index + 1);
      }
    } else {
      onChangeText(index, text);
      if (index > 0) {
        focusInput(index - 1);
      }
    }
  };
  const style = styles;
  useEffect(() => {
    focusInput(0);
  }, []);

  return (
    <View style={style.container}>
      {inputs.map((_, index) => (
        <TextInput
          key={index}
          cursorColor={COMMON_COLORS.secondary}
          style={[style.input, focusedIndex === index && style.focusedInput]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={text => handleInputChange(index, text)}
          value={value[index]}
          ref={inputRefs[index]}
          onFocus={() => setFocusedIndex(index)}
        />
      ))}
    </View>
  );
};
export default OTPInput;
