import * as actionTypes from "./actionTypes";
import api from "api";

export const startRequest = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_START,
    });
  };
};

export const successRequest = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_SUCCESS,
    });
  };
};

export const failRequest = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.REQUEST_FAIL,
    });
  };
};

export const getTasks = () => {
  return (dispatch, getState) => {
    dispatch(startRequest());
    const token = getState().auth.token;
    api
      .getTasks(token)
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: actionTypes.INIT_TASKS,
            payload: {
              tasks: result.data.data.todos,
            },
          });
          dispatch(successRequest());
        } else {
          dispatch(failRequest());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};

export const addIntrant = (task) => {
  return (dispatch, getState) => {
    dispatch(startRequest());
    const token = getState().auth.token;

    api
      .postTodo(token, task)
      .then((result) => {
        if (result.status === 200) {
          dispatch({
            type: actionTypes.ADD_INTRANT,
            payload: {
              task: result.data.data.todo,
            },
          });
          dispatch(successRequest());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};

export const updateComplete = (itemId, complete) => {
  return (dispatch, getState) => {
    dispatch(startRequest());

    const token = getState().auth.token;

    api.updateTask(token, itemId, { complete: !complete })
      .then(() => {
        dispatch(successRequest());
        dispatch({
          type: actionTypes.UPDATE_COMPLETE,
          payload: {
            id: itemId
          }
        });
      })
      .catch(err => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};