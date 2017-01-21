import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LoginScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Login',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen!</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginScreen