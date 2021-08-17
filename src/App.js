import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNCallKeep from 'react-native-callkeep';

const Stack = createStackNavigator();

import Colapsible from './screens/CollapsibleTab';
import Gesture from './screens/GestureHandler';
import LearnStyle from './screens/learnStyle';
import CustomModal from './screens/LearnHeader';
// import ReactModal from './screens/reactModal';
// import CallKeep from './screens/CallKeep';
import ModalDropDown from './screens/ModalDropdown';
import AsyncStorage from './screens/AsyncStorage';
import HeadTab from './screens/HeadTabView';

const options = {
  ios: {
    appName: 'CallKeepDemo',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
  },
};

try {
  RNCallKeep.setup(options);
  RNCallKeep.setAvailable(true);
} catch (err) {
  console.error('initializeCallKeep error:', err.message);
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="headTab"
            component={HeadTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="asyncStorage"
            component={AsyncStorage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ModalDropDown"
            component={ModalDropDown}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomModal"
            component={CustomModal}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LearnStyle"
            component={LearnStyle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Gesture"
            component={Gesture}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Colapsible"
            component={Colapsible}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
