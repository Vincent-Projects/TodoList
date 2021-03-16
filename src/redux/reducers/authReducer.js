import * as actionTypes from "../actions/actionTypes";

const initialState = {
    isAuth: false,
    token: null,
    token_expire: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                token_expire: action.payload.token_expire
            };
        default:
            return state;
    }
};

export default reducer;