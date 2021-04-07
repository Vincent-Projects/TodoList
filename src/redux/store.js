import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const logger = (/* { getState } */) => {
  return (next) => {
    return (action) => {
      //console.log(getState());
      return next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger))
);

//export type RootState = ReturnType<typeof state.getState>;   for typescript setup

export default store;
