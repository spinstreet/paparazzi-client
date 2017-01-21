import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>ProfileScreen!</Text>
        <Text onPress={this._goBackHome}>
          Go back home
        </Text>
      </View>
    )
  }

  _goBackHome = () => {
    this.props.naviation
  }
}


export default ProfileScreen