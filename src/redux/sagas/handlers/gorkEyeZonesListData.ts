import { put } from "redux-saga/effects";
import { setgorkEyeZonesListData } from "../../actions/gorkEyeZonesListActions";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { loginApi, logoutApi } from "../../../services/endPoints";
import gorkEyeZonesListData from "mockdata/grokEyeZonesList";


export function* handleGorkEyeZonesListData(action: any) {
  try {
    // const { fetchLogin } = fetchAPIServices;
    // const response = yield fetchLogin(logoutApi, action.payload);
    const response = gorkEyeZonesListData;
    if (response) {
      yield put(setgorkEyeZonesListData(response));
    } else {
      yield put(setgorkEyeZonesListData({}));
    }
  } catch (error) {
    console.log(error);
  }
}