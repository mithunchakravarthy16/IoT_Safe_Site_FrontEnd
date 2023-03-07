import { put } from "redux-saga/effects";
import { setDashboardData } from "../../actions/dashboardActions";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import userList from "../../../mockdata/login";
import alerts from "mockdata/alerts";
import dashboardDataValue from "../../../mockdata/dashboardEquipments";

export function* handleDashboardData(action: any) {
  try {
    // const { fetchLogin } = fetchAPIServices;
    // const response = yield fetchLogin(logoutApi, action.payload);
    const response = dashboardDataValue;
    if (response) {
      yield put(setDashboardData(response));
    } else {
      yield put(setDashboardData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
