import { combineReducers } from "redux";

import authReducer from "./authReducer";
import tasksReducer from "./tasksReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  settings: settingsReducer
});

export default rootReducer;
