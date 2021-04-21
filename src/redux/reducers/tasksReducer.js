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
  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        ...action.payload.task,
      },
    ],
  };
};

const updateComplete = (state, action) => {
  const updatedTasks = [...state.tasks];
  const index = updatedTasks.findIndex(
    (task) => task._id === action.payload.id
  );
  updatedTasks[index].complete = !updatedTasks[index].complete;

  return {
    ...state,
    tasks: [...updatedTasks],
  };
};

const updateColor = (state, action) => {
  const updatedTasks = [...state.tasks];
  const index = updatedTasks.findIndex(
    (task) => task._id === action.payload.id
  );
  updatedTasks[index].primaryTagColor = action.payload.primaryTagColor;
  updatedTasks[index].secondaryTagColor = action.payload.secondaryTagColor;

  return {
    ...state,
    tasks: [...updatedTasks],
  };
};

const deleteTask = (state, action) => {
  const updatedTasks = [...state.tasks];
  const filteredUpdatedTasks = updatedTasks.filter(
    (task) => task._id !== action.payload.id
  );

  return {
    ...state,
    tasks: [...filteredUpdatedTasks],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_TASKS:
      return initTasks(state, action);
    case actionTypes.ADD_INTRANT:
      return addIntrant(state, action);
    case actionTypes.UPDATE_COMPLETE:
      return updateComplete(state, action);
    case actionTypes.UPDATE_COLOR:
      return updateColor(state, action);
    case actionTypes.DELETE_TASK:
      return deleteTask(state, action);
    default:
      return state;
  }
};

export default reducer;
