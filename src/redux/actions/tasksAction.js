import * as actionTypes from "./actionTypes";
import api from "api";
import COLORS, { colorIdToHex } from "utils/colors";
import { WEEK_GOAL } from "utils/constants";

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

export const addTaskToday = (task) => {
  return async (dispatch, getState) => {
    dispatch(startRequest());
    const token = getState().auth.token;

    let result;
    try {
      result = await api.postTodo(token, task);
    } catch (err) {
      dispatch(failRequest());
    }

    if (!result.data.data.todo) {
      dispatch(failRequest());
      throw new Error("Some error occured");
    }

    const todo = result.data.data.todo;

    result = null;
    try {
      result = await api.updateTask(token, todo._id, {
        dueDate: new Date(Date.now()),
      });
    } catch (err) {
      dispatch(failRequest());
    }

    if (!result.data.data.todo) {
      dispatch(failRequest());
      throw new Error("Some error occured");
    }

    dispatch(successRequest());
    dispatch({
      type: actionTypes.ADD_INTRANT,
      payload: {
        task: result.data.data.todo,
      },
    });
  };
};

export const addGoalNextWeek = (goal) => {
  return async (dispatch, getState) => {
    dispatch(startRequest());
    const token = getState().auth.token;

    let result;
    try {
      result = await api.postTodo(token, goal);
    } catch (err) {
      dispatch(failRequest());
    }

    if (!result.data.data.todo) {
      dispatch(failRequest());
      throw new Error("Some error occured");
    }

    const todo = result.data.data.todo;

    result = null;
    try {
      result = await api.updateTask(token, todo._id, { projectId: WEEK_GOAL });
    } catch (err) {
      dispatch(failRequest());
    }

    if (!result.data.data.todo) {
      dispatch(failRequest());
      throw new Error("Some error occured");
    }

    dispatch(successRequest());
    dispatch({
      type: actionTypes.ADD_INTRANT,
      payload: {
        task: result.data.data.todo,
      },
    });
  };
};

export const updateComplete = (itemId, complete) => {
  return (dispatch, getState) => {
    dispatch(startRequest());

    const token = getState().auth.token;

    api
      .updateTask(token, itemId, { complete: !complete })
      .then(() => {
        dispatch(successRequest());
        dispatch({
          type: actionTypes.UPDATE_COMPLETE,
          payload: {
            id: itemId,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};

export const updateColor = (itemId, colorId) => {
  return (dispatch, getState) => {
    dispatch(startRequest());

    const token = getState().auth.token;

    const color = COLORS.find((c) => c.id === colorId);
    const primary = colorIdToHex(color.color);
    const secondary = colorIdToHex(color.secondColor);
    // need to check for permissions

    api
      .updateTask(token, itemId, {
        primaryTagColor: primary,
        secondaryTagColor: secondary,
      })
      .then((result) => {
        dispatch(successRequest());
        dispatch({
          type: actionTypes.UPDATE_COLOR,
          payload: {
            id: result.data.data.todo._id,
            primaryTagColor: result.data.data.todo.primaryTagColor,
            secondaryTagColor: result.data.data.todo.secondaryTagColor,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};

export const deleteTask = (itemId) => {
  return (dispatch, getState) => {
    dispatch(startRequest());

    const token = getState().auth.token;

    api
      .deleteTask(token, itemId)
      .then((result) => {
        dispatch(successRequest());
        dispatch({
          type: actionTypes.DELETE_TASK,
          payload: {
            id: result.data.data.task._id,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(failRequest());
      });
  };
};
