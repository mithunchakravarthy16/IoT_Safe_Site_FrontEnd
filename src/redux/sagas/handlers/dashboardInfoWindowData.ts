import { put } from "redux-saga/effects";
import { setDashboardInfoWindowData } from "../../actions/dashboardInfoWindowActions";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";

import dashboardInfoWindow from "../../../mockdata/dashboardInfoWindow";

export function* handleDashboardInfoWindowData(action: any) {
  try {
    // const { fetchLogin } = fetchAPIServices;
    // const response = yield fetchLogin(logoutApi, action.payload);
    const response = dashboardInfoWindow;
    if (response) {
      yield put(setDashboardInfoWindowData(response));
    } else {
      yield put(setDashboardInfoWindowData({}));
    }
  } catch (error) {
    console.log(error);
  }
}