import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

const AsyncStorageScreen = () => {
  const [nama, setName] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    getItem();
  }, [nama]);

  const submitName = async () => {
    try {
      if (toggleCheckBox === true) {
        await AsyncStorage.setItem('storeName', nama);
        console.log('set storage');
      } else {
        console.log('not set storage');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('storeName');
      if (value !== null) {
        setName(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('storeName');
    } catch (e) {
      console.log(e);
    }

    console.log('Done.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>my name is {nama}</Text>
      <TextInput
        placeholder="masukan nama"
        style={styles.input}
        onChangeText={text => setName(text)}
        value={nama}
      />
      <View style={{flexDirection: 'row', margin: 10}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          tintColors={{true: '#ff00c0'}}
        />
        <Text>Remember me</Text>
      </View>
      <Button title="submit" onPress={submitName} />
      <Button title="Clear" onPress={removeValue} />
    </SafeAreaView>
  );
};

export default AsyncStorageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    width: '95%',
  },
});
