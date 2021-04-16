import * as actionTypes from "../actions/actionTypes";
import {
  subscriptionNumberToAccessLevel
} from "utils/auth";

const initialState = {
  accessLevel: null,
  isAuth: false,
  token: null,
  token_expire: null,
  firstname: null,
  email: null,
  isLoading: false,
  authErrMessage: null,
  authSuccessMessage: null,
};

const login = (state, action) => {
  const accessLevel = subscriptionNumberToAccessLevel(action.payload.subscriptionNumber);
  return {
    ...state,
    isAuth: true,
    token: action.payload.token,
    token_expire: action.payload.token_expire,
    firstname: action.payload.firstname,
    email: action.payload.email,
    accessLevel: accessLevel, // Change this using the returned value from API
  };
};

const authStart = (state) => {
  return {
    ...state,
    isLoading: true,
  };
};

const authStop = (state) => {
  return {
    ...state,
    isLoading: false,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    authErrMessage: action.payload.errMessage,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    authSuccessMessage: action.payload.successMessage,
  };
};

const authResetErr = (state) => {
  return {
    ...state,
    authErrMessage: null,
  };
};

const logout = (state) => {
  return {
    ...state,
    isAuth: false,
    token: null,
    token_expire: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action);
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_STOP:
      return authStop(state);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_RESET:
      return authResetErr(state);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export default reducer;
