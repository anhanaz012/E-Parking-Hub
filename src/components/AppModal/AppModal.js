import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { LABELS } from '../../labels';
import AppInput from '../AppInput/AppInput';
import AppButton from '../Button/Button';
import Space from '../Space/Space';
import { styles } from './styles';

const AppModal = ({isVisible, onBtnPress, onClose}) => {
  const style = styles;
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={style.container}>
          <AppInput
            theme={theme}
            style={style.textInpuCont}
            placeholder={LABELS.cardNumber}
          />
          <Space mT={20} />
          <AppInput
            theme={theme}
            style={style.textInpuCont}
            placeholder={LABELS.cardNumber}
          />
          <Space mT={10} />
          <View style={style.dropdownCont}>
            <AppInput style={style.dropDown} placeholder={LABELS.cardNumber} />
            <AppInput style={style.dropDown} placeholder={LABELS.cardNumber} />
            <AppInput style={style.dropDown} placeholder={LABELS.cardNumber} />
          </View>
          <Space mT={10} />
          <AppButton title={LABELS.confirm} />
          <Space mT={20} />
          <AppButton
            title={LABELS.back}
            extraStyle={{btnContainer: style.backBtn, text: style.backBtnText}}
            onPress={onClose}
          />
        </View>
      </Modal>
    </View>
  );
};

export default AppModal;
