import axios from "axios";

import * as actionTypes from "./actionTypes";


export const login = (email, password) => {
    return dispatch => {
        setTimeout(() => {
            const token = "something";
            const tokenExpire = 8000;

            localStorage.setItem("token", token);
            localStorage.setItem("token_expire", tokenExpire); // add a future date of expire token

            dispatch({
                type: actionTypes.LOGIN,
                payload: {
                    token: token,
                    token_expire: tokenExpire
                }
            });
        }, 300);

        // + save using localStorage
        /*axios.post(
            "",
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
                console.log(result);
            }).catch(err => {
                console.log("err");
            });*/
    };
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem("token");
        localStorage.removeItem("token_expire"); // Make constants of those values

        dispatch({
            type: actionTypes.LOGOUT
        });
    };
};

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        const tokenExpire = localStorage.getItem("token_expire"); // Add check for token

        console.log(token);
        if (!token) {
            dispatch({
                type: actionTypes.LOGOUT
            });

            return;
        }

        dispatch({
            type: actionTypes.LOGIN,
            payload: {
                token,
                token_expire: tokenExpire
            }
        });
    };
};