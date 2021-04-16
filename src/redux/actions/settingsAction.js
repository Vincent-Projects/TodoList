import * as actionTypes from "./actionTypes";
import { switchTheme } from "../../theme";

export const invertTheme = () => {
  return (dispatch) => {
    const nextTheme = switchTheme();
    dispatch({
      type: actionTypes.SWITCH_THEME,
      payload: {
        theme: nextTheme,
      },
    });
  };
};
