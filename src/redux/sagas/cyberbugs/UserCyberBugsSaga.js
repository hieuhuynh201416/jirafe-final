import React from "react";
import {
  call,
  delay,
  fork,
  take,
  takeLatest,
  put,
  takeEvery,
  all,
} from "redux-saga/effects";
import { USER_SIGIN_API } from "../../constant/CyberBugsConstant";

function* siginSaga(action) {
  console.log(action);
}

function* theoDoiSignin() {
  yield takeLatest(USER_SIGIN_API, siginSaga);
}
export default theoDoiSignin;
