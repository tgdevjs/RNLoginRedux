import { combineReducers } from 'redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import { VERIFY_USER, LOGIN_USER, LOGOUT_USER, REJECT_USER } from './actionTypes';
import AppNavigator from './appNavigator';


const initialNavState = {
  index: 0,
  routes: [
    { key: 'InitA', routeName: 'Login' },
    { key: 'InitB', routeName: 'Home' },
  ],
};

const loginStates = ['unauthenticated', 'authenticated', 'error'];

export const initialStoreState = {
  nav: initialNavState,
  userName: "",
  loginState: 0,
};

// NavReducer
const navReducer = (state = initialNavState, action) => {

  switch (action.type) {
    case LOGIN_USER:
      return AppNavigator.router.getStateForAction( NavigationActions.navigate({ routeName: 'Home' }, {userName: action.userName}), state);
    case LOGOUT_USER:
      return AppNavigator.router.getStateForAction( NavigationActions.back(), state);
    default:
      const newState = AppNavigator.router.getStateForAction(action, state);
      return newState || state;
  }

};


// User Reducer
const userReducer = ( state = "", action ) => {

  switch (action.type) {
    case VERIFY_USER:
    case LOGIN_USER:
      const { userName } = action;
      return userName;
    default:
      return state;
  }

}

// loginStateReducer
const loginStateReducer = ( state = 0, action ) => {

  switch (action.type) {
    case LOGIN_USER:
      return 1;
    case LOGOUT_USER:
      return 0;
    case REJECT_USER:
      return 2;
    default:
      return state;
  }

}


export default appReducer = combineReducers({
  nav: navReducer,
  userName: userReducer,
  loginState: loginStateReducer,
});
