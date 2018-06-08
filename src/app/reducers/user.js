import * as actionTypes from '../constants/actionTypes';

export default (user = { isFetching: false, login: false }, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...user,
        isFetching: true
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...user,
        isFetching: false
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...user,
        isFetching: false,
        login: true,
        expire: action.payload.expire
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...user,
        isFetching: true
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...user,
        isFetching: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...user,
        isFetching: false,
        login: true,
        expire: action.payload.expire
      };
    default:
      return user;
  }
};