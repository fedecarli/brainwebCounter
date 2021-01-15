/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LogBox,
} from 'react-native';
import {Provider,} from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import configureStore from './src/store/reducers/configureStore';

import AppNavigator from './src/navigation/AppNavigator';

const store = configureStore();

const App = () => {
  LogBox.ignoreAllLogs();


  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator/>
    </Provider>
  );
};

export default App
