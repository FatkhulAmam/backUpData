import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Modal from 'react-native-modal';

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        animationIn="fadeInDown"
        onBackButtonPress={() => setModalVisible(true)}
        onBackdropPress={toggleModal}
        swipeDirection="up"
        backdropTransitionOutTiming={2000}>
        <View style={{backgroundColor: '#888'}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({});
