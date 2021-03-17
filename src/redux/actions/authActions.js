import axios from "axios";

import jwt from "jsonwebtoken";
import * as actionTypes from "./actionTypes";

const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
const AUTH_SECRET = process.env.REACT_APP_AUTH_SECRET;

export const login = (email, password) => {
    return dispatch => {
        axios.post(
            "https://todolist-api-public-demo.herokuapp.com/auth/login",
            {
                email,
                password
            },
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(result => {
                const { token, token_expire, username, email } = result.data.data;

                const tokenExpire = new Date(new Date().getTime() + token_expire * 1000); // replace 8000 -> tokenExpire got from api call

                const auth_data = {
                    token: token,
                    tokenExpire: tokenExpire,
                    username,
                    email,
                    secret: AUTH_SECRET
                };

                const jwt_encoded = jwt.sign(auth_data, JWT_SECRET);
                localStorage.setItem("token", jwt_encoded);

                dispatch({
                    type: actionTypes.LOGIN,
                    payload: {
                        token: token,
                        token_expire: tokenExpire,
                        username,
                        email
                    }
                });
            }).catch(err => {
                dispatch(logout());
            });
    };
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token");

        dispatch({
            type: actionTypes.LOGOUT
        });
    };
};

export const checkAuthState = () => {
    return dispatch => {
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

        if (new Date(decodedToken.tokenExpire).getTime() < new Date(Date.now()).getTime()) {
            dispatch(logout());

            return;
        }

        dispatch({
            type: actionTypes.LOGIN,
            payload: {
                token: decodedToken.token,
                token_expire: decodedToken.tokenExpire,
                username: decodedToken.username,
                email: decodedToken.email
            }
        });
    };
};

export const AUTH_START = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_START
        });
    };
};

export const AUTH_STOP = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.AUTH_STOP
        });
    };
};

export const signup = (username, email, password, confirmPassword, code) => {
    return dispatch => {
        dispatch(AUTH_START());

        /* axios.post(`https://todolist-api-public-demo.herokuapp.com/auth/signup/${code}`, {
            username,
            email,
            password,
            confirmPassword
        }, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(result => {
                dispatch(AUTH_STOP());
            })
            .catch(err => {
                dispatch(AUTH_STOP());
                dispatch(logout());
            }); */

        setTimeout(() => {
            dispatch(AUTH_STOP());
        }, 1000);
    };
};