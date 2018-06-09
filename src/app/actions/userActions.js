import * as actionTypes from '../constants/actionTypes';
import api from "./api";

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
  return api.register(auth)
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

const loginRequest = (auth) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: auth
  }
};
const loginSuccess = (credential) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: credential
  };
};
const loginFailure = (message) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: message,
    error: true
  }
};
export const login = auth => dispatch => {
  dispatch(loginRequest(auth));
  return api.login(auth)
    .then(data => {
      if (data.credential) {
        dispatch(loginSuccess(data.credential));
        sessionStorage.setItem('access_token', data.credential.access_token);
        console.log('Register successful and logged in!');
      }
      else {
        dispatch(loginFailure(data.message));
        console.log('An error eccured: ' + data.message);
      }
    });
};