import React from 'react';
import {Modal as RNModal, StyleSheet, View} from 'react-native';

const Modal = ({isModalVisible, onClose, children}) => {
  return (
    <View style={styles.centeredView}>
      <RNModal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </RNModal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modal;
