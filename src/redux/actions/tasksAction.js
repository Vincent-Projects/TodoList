import * as actionTypes from "./actionTypes";

export const startRequest = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_START
    });
  };
};

export const successRequest = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_SUCCESS
    });
  };
};

export const failRequest = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REQUEST_FAIL
    });
  };
};

export const addIntrant = (task) => {
  return dispatch => {
    dispatch(startRequest());
    // Make request to add an item only string
    // object returned by api : 
    const newItemSaved = {
      _id: Math.random(),
      task: task,
      complete: false,
      userId: "someuserid",
      projectId: null,
      primaryTagColor: null,
      secondaryTagColor: null,
      startedRecuringTime: null,
      recuringTime: null,
      recuringDate: null,
      recuringDay: null,
      recuringWeekDay: null,
      dueDate: null,
      createdAt: new Date(Date.now()),
      lastUpdate: new Date(Date.now())
    };

    dispatch({
      type: actionTypes.ADD_INTRANT,
      payload: {
        task: newItemSaved
      }
    });
  };
};