/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware} from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';

/* Views */
import { homeScreen } from './src/components/views/homeScreen'
import { profileScreen } from './src/components/views/profileScreen'
import { loginScreen } from './src/components/views/loginScreen'


/* Navigiation */
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  profile: () => ProfileScreen,
  login: () => LoginScreen
}));

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class paparazziClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Paparazzi base
          </Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('paparazziClient', () => paparazziClient);
