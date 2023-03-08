import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import alertsDataReducer from "./alertsDataReducer";
import dashboardDataReducer from "./dashboardDataReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  alertsResponse: alertsDataReducer,
  dashboardResponse: dashboardDataReducer,
});

export default rootReducer;
