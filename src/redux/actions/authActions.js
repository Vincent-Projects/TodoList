import API from "api";
import jwt from "jsonwebtoken";
import * as actionTypes from "./actionTypes";

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
const AUTH_SECRET = process.env.REACT_APP_AUTH_SECRET;

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(AUTH_START());

    API.login(email, password)
      .then((result) => {
        const { token, token_expire, username, email } = result.data.data;

        const tokenExpire = new Date(
          new Date().getTime() + token_expire * 1000
        );

        const auth_data = {
          token: token,
          tokenExpire: tokenExpire,
          username,
          email,
          secret: AUTH_SECRET,
        };

        const jwt_encoded = jwt.sign(auth_data, JWT_SECRET);
        localStorage.setItem("token", jwt_encoded);

        dispatch({
          type: actionTypes.LOGIN,
          payload: {
            token: token,
            token_expire: tokenExpire,
            username,
            email,
          },
        });
        dispatch(AUTH_STOP());
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          dispatch(AUTH_FAIL("Wrong Credentials"));
        } else {
          dispatch(AUTH_FAIL("Server Problem, please try later"));
        } // Dispatch different message when account need to be verified
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");

    dispatch({
      type: actionTypes.LOGOUT,
    });
    dispatch(AUTH_STOP());
  };
};

export const signup = (
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  code
) => {
  return (dispatch) => {
    dispatch(AUTH_START());

    API.signup(firstname, lastname, email, password, confirmPassword, code)
      .then((result) => {
        if (result.status !== 201) {
          dispatch(AUTH_FAIL("Failed to create an account"));
          return;
        }

        dispatch(
          AUTH_SUCCESS(
            "We sent you an activation link, check your email to access the app."
          )
        );
        dispatch(AUTH_STOP());
      })
      .catch((err) => {
        const statusCodeErr = err?.response?.status;
        if (statusCodeErr !== 500) {
          dispatch(AUTH_FAIL("Wrong Credentials"));
        } else {
          dispatch(AUTH_FAIL("Server Problem, please try later"));
        }
      });
  };
};

export const validateAccount = (token) => {
  return (dispatch) => {
    dispatch(AUTH_START());

    API.validateAccount(token)
      .then((result) => {
        if (result?.status === 200) {
          dispatch(
            AUTH_SUCCESS("Your account has been successfully validated.")
          );
        }
        dispatch(AUTH_STOP());
      })
      .catch(() => {
        dispatch(AUTH_FAIL("Failed to validate account"));
        dispatch(AUTH_STOP());
      });

    // actionTypes.VALIDATE_ACCOUNT API call
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    dispatch(AUTH_START());
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());

      return;
    }

    let decodedToken;

    try {
      decodedToken = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      dispatch(logout());
    }

    if (!decodedToken) {
      dispatch(logout());

      return;
    }

    if (decodedToken.secret !== AUTH_SECRET) {
      dispatch(logout());

      return;
    }

    if (
      new Date(decodedToken.tokenExpire).getTime() <
      new Date(Date.now()).getTime()
    ) {
      dispatch(logout());

      return;
    }

    dispatch({
      type: actionTypes.LOGIN,
      payload: {
        token: decodedToken.token,
        token_expire: decodedToken.tokenExpire,
        username: decodedToken.username,
        email: decodedToken.email,
      },
    });
    dispatch(AUTH_STOP());
  };
};

export const AUTH_START = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTH_START,
    });
  };
};

export const AUTH_STOP = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTH_STOP,
    });
  };
};

export const AUTH_SUCCESS = (message) => {
  return (dispatch) => {
    dispatch(authErrReset());
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        successMessage: message,
      },
    });
  };
};

export const AUTH_FAIL = (errMessage) => {
  return (dispatch) => {
    dispatch(AUTH_STOP());
    dispatch({
      type: actionTypes.AUTH_FAIL,
      payload: {
        errMessage: errMessage,
      },
    });
  };
};

export const authErrReset = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.AUTH_RESET,
    });
  };
};
