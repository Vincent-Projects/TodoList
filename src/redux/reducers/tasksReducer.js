import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const initTasks = (state, action) => {
  return {
    ...state,
    tasks: [...action.payload.tasks],
  };
};

const addIntrant = (state, action) => {
  const { _id, task, complete, userId } = action.payload.task;

  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        _id,
        task,
        complete,
        userId,
      },
    ],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_TASKS:
      return initTasks(state, action);
    case actionTypes.ADD_INTRANT:
      return addIntrant(state, action);
    default:
      return state;
  }
};

export default reducer;
