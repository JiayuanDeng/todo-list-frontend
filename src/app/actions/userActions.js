import * as actionTypes from '../constants/actionTypes';
import api from "../util/api";

const registerRequest = (auth) => {
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: auth
  }
};
const registerSuccess = (credential) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: credential
  };
};
const registerFailure = (message) => {
  return {
    type: actionTypes.REGISTER_FAILURE,
    payload: message,
    error: true
  }
};
export const register = auth => dispatch => {
  dispatch(registerRequest(auth));
  api.register(auth)
    .then(data => {
      if (data.credential) {
        dispatch(registerSuccess(data.credential));
        sessionStorage.setItem('access_token', data.credential.access_token);
        console.log('Register successful and logged in!');
      }
      else {
        dispatch(registerFailure(data.message));
        console.log('An error eccured: ' + data.message);
      }
    });
};