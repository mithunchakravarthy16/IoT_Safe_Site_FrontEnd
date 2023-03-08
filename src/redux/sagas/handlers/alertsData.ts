import { put } from "redux-saga/effects";
import { setAlertsData } from "../../actions/alertsDataActions";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import userList from "../../../mockdata/login";
import alerts from "mockdata/alerts";

export function* handleAlertsData(action: any) {
  try {
    // const { fetchLogin } = fetchAPIServices;
    // const response = yield fetchLogin(logoutApi, action.payload);
    const response = alerts;
    if (response) {
      yield put(setAlertsData(response));
    } else {
      yield put(setAlertsData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
