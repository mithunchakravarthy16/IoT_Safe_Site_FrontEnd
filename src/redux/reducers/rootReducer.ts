import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import alertsDataReducer from "./alertsDataReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  alertsResponse: alertsDataReducer,
});

export default rootReducer;
