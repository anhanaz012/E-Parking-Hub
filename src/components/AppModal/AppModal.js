import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { SVG } from '../../assets/svg';
import { LABELS } from '../../labels';
import AppInput from '../AppInput/AppInput';
import AppButton from '../Button/Button';
import GradientButton from '../GradientButton/GradientButton';
import Icon from '../Icon/Icon';
import Space from '../Space/Space';
import { styles } from './styles';

const AppModal = ({isVisible, onBtnPress, onClose}) => {
  const style = styles;
  const theme = 'light';
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={style.container}>
          <View>
            <Icon
              SVGIcon={<SVG.cancel fill={'black'} height={20} width={20} />}
              alignSelf={'flex-end'}
            />
          </View>
          <Space mT={20} />
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
          <Space mT={15} />
          <View style={style.dropdownCont}>
            <AppInput
              style={style.dropDown}
              placeholder={LABELS.cardNumber}
              theme={theme}
              extraStyle={{textInputContainer: {width: '25%'}}}
            />
            <AppInput
              style={style.dropDown}
              placeholder={LABELS.cardNumber}
              theme={theme}
              extraStyle={{textInputContainer: {width: '25%'}}}
            />
            <AppInput
              style={style.dropDown}
              placeholder={LABELS.cardNumber}
              theme={theme}
              extraStyle={{textInputContainer: {width: '25%'}}}
            />
          </View>
          <Space mT={15} />
          <GradientButton
            title={LABELS.confirm}
            onPress={onBtnPress}
            textColor={'white'}
          />
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
