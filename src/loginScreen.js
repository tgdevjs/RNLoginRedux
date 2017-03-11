import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import * as actionCreators from './actionCreators';

@connect(state => ({userName: state.userName, loginState: state.loginState }),
      dispatch => ({actions: bindActionCreators(actionCreators, dispatch), dispatch}))
export default class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props) {
    super(props);
    this.state = { userInput: ""}
  }

  onLoginButton() {
    this.props.actions.verifyUser(this.state.userInput);
  }

  renderTryAgain() {

    if (this.props.loginState === 2) {
      return <Text style={{color: "#f00"}}>Try Again</Text>
    }

  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (text) =>  this.setState({userInput: text}) }
          value={this.state.userName}
        />
        <Button
          onPress={ () => this.onLoginButton() }
          title="Login"
        />
        { this.renderTryAgain() }
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
