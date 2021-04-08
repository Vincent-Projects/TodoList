import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [
    {
      _id: "someId",
      task: "Do something interesting here",
      complete: false,
      userId: "someidhere",
    },
    {
      _id: "dzad",
      task: "I need to do something here",
      complete: false,
      userId: "someidhere",
    },
    {
      _id: "somgerqaheId",
      task: "This thing is finished",
      complete: true,
      userId: "someidhere",
    },
  ],
};

const addIntrant = (state, action) => {
  const {
    _id,
    task,
    complete,
    userId
  } = action.payload.task;

  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        _id,
        task,
        complete,
        userId
      }
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INTRANT:
      return addIntrant(state, action);
    default:
      return state;
  }
};

export default reducer;
