import { combineReducers } from "redux";
import TaskReducer from "./task";
import UiReducer from "./ui";
import authReducer from "./auth";
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  // Define reducers
  task: TaskReducer,
  ui: UiReducer,
  form: formReducer,
  auth: authReducer,
  router: connectRouter(history),
});

export default rootReducer;
