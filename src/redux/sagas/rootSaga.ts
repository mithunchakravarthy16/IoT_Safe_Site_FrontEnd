import { all, takeLatest } from "redux-saga/effects";
import { handleLogin, handleLogout } from "./handlers/login";
import login from "../actions/loginActions";

export default function* rootSaga() {
  yield all([watchLogin(), watchLanguage(), watchLogout()]);
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