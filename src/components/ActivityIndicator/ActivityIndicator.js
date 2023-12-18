import React from 'react';
import {Fold} from 'react-native-animated-spinkit';
import Modal from 'react-native-modal';
import {STYLES} from '../../assets/theme';

const ActivityIndicator = ({isVisible}) => {
  return (
    <>
      <Modal isVisible={isVisible} style={[STYLES.JCCenter, STYLES.AICenter]}>
        <Fold color={'white'} size={48} />
      </Modal>
    </>
  );
};
export default ActivityIndicator;
