import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  token: null,
  token_expire: null,
  username: null,
  email: null,
  isLoading: false,
  authErrMessage: null,
  authSuccessMessage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOGIN:
    return {
      ...state,
      isAuth: true,
      token: action.payload.token,
      token_expire: action.payload.token_expire,
      username: action.payload.username,
      email: action.payload.email,
    };
  case actionTypes.AUTH_START:
    return {
      ...state,
      isLoading: true,
    };
  case actionTypes.AUTH_STOP:
    return {
      ...state,
      isLoading: false,
    };
  case actionTypes.AUTH_FAIL:
    return {
      ...state,
      authErrMessage: action.payload.errMessage,
    };
  case actionTypes.AUTH_SUCCESS:
    return {
      ...state,
      authSuccessMessage: action.payload.successMessage,
    };
  case actionTypes.AUTH_RESET:
    return {
      ...state,
      authErrMessage: null,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default reducer;
