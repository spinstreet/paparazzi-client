import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';

class LoginScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Login',
    }
  }

  state = { username: '', password: '', loading: false }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.state.loading ? styles.hidden : {}}>
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
        <View style={this.state.loading ? {} : styles.hidden}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
        </View>
      </View>
    )
  }
  onLogin = () => {
    this.setState({ loading: true })
    Alert.alert(
      'Alert ti lert',
      this.state.username + ' ' + this.state.password,
      [
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
  hidden: {
    width: 0,
    height: 0,
  },
});

export default LoginScreen