import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { logoutUser } from './actionCreators';

@connect(state => ({userName: state.userName }), dispatch => ({logoutUser: (userName) => dispatch( logoutUser(userName) )}))
export default class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  };

  onLogoutButton() {
    this.props.logoutUser(this.props.userName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the Home Screen {this.props.userName}!
        </Text>
        <Button
          onPress={ () => this.onLogoutButton() }
          title="Logout"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
