import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import { handleAlertsData } from "./handlers/alertsData";
import login from "../actions/loginActions";
import alertsData from "redux/actions/alertsDataActions";

export default function* rootSaga() {
  yield all([watchLogin(), watchLanguage(), watchLogout(), watchAlertsData()]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchLanguage() {
  yield takeLatest(login.GET_LANGUAGE, handleLogin);
}

export function* watchLogout() {
  yield takeLatest(login.GET_USER_LOGOUT, handleLogout);
}

export function* watchAlertsData() {
  yield takeLatest(alertsData.GET_ALERTS_DATA, handleAlertsData);
}
