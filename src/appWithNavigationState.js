import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './appNavigator';


@connect(state => ({
  nav: state.nav,
}))
export default class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}
