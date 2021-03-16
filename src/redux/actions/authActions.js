import axios from "axios";

import * as actionTypes from "./actionTypes";


export const login = (email, password) => {
    return dispatch => {
        dispatch({
            type: actionTypes.LOGIN,
            payload: {
                token: "something",
                token_expire: 8300
            }
        });
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
    }
}