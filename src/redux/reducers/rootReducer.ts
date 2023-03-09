import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import alertsDataReducer from "./alertsDataReducer";
import dashboardDataReducer from "./dashboardDataReducer";
import dashboardInfoWindowDataReducer from "./dashboardInfoWindowDataReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  alertsResponse: alertsDataReducer,
  dashboardResponse: dashboardDataReducer,
  dashboardInfoWindowResponse: dashboardInfoWindowDataReducer,
});

export default rootReducer;

