import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput, Button, Alert
} from 'react-native';

class LoginScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Login',
    }
  }

  state = { username: '', password: '' }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.editing}
          onChangeText={(u) => this.setState({ username: u })}
          keyboardType={"email-address"}
          placeholder={"Email/Username"}
          returnKeyType={"next"}
        />
        <TextInput
          style={styles.editing}
          onChangeText={(p) => this.setState({ password: p })}
          placeholder={"Password"}
          returnKeyType={"done"}
          secureTextEntry={true}
        />
        <Button
          onPress={this.onLogin}
          title="Login / Register"
          color="#841584"
        />
      </View>
    )
  }
  onLogin = () => {
    Alert.alert(
      'Alert ti lert',
      this.state.username + ' ' + this.state.password,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16
  },
  editing: {
    "height": 48
  },
});

export default LoginScreen