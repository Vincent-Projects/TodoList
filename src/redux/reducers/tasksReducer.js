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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;