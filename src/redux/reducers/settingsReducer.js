import * as actionTypes from "../actions/actionTypes";

const initialValue = {
  theme: {}
};

const invertTheme = (state, action) => {
  return {
    ...state,
    theme: action.payload.theme
  };
};

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      return invertTheme(state, action);
    default:
      return state;
  }
};

export default reducer;