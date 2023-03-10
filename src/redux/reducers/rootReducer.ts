import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import alertsDataReducer from "./alertsDataReducer";
import dashboardDataReducer from "./dashboardDataReducer";
import dashboardInfoWindowDataReducer from "./dashboardInfoWindowDataReducer";
import gorkEyeZonesListDataReducer from "./gorkEyeZonesListDataReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  alertsResponse: alertsDataReducer,
  dashboardResponse: dashboardDataReducer,
  dashboardInfoWindowResponse: dashboardInfoWindowDataReducer,
  gorkEyeZonesListResponse: gorkEyeZonesListDataReducer,
});

export default rootReducer;

