import { VERIFY_USER, LOGIN_USER, LOGOUT_USER, REJECT_USER} from './actionTypes';
import { NavigationActions } from 'react-navigation';

export const verifyUser = ( userName ) => {

  return (dispatch) => {

    if (userName === "Pavel" || userName === "Glyn" ) {
      dispatch(loginUser(userName));
    } else {
      dispatch( rejectUser(userName));
    }
  }
}


export const loginUser = (userName) => {

  return {
     type: LOGIN_USER,
     userName
  };

}

export const logoutUser = (userName) => {

  return {
     type: LOGOUT_USER,
     userName
  };

}

export const rejectUser = (userName) => {

  return {
    type: REJECT_USER,
    userName
  };

}
