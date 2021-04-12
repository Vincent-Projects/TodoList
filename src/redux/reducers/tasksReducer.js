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

const updateComplete = (state, action) => {
  const updatedTasks = [
    ...state.tasks
  ];
  const index = updatedTasks.findIndex(task => task._id === action.payload.id);
  updatedTasks[index].complete = !updatedTasks[index].complete;

  return {
    ...state,
    tasks: [
      ...updatedTasks
    ]
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
    default:
      return state;
  }
};

export default reducer;
