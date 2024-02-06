import { all } from "redux-saga/effects";
import * as Cyberbugs from "./cyberbugs/UserCyberBugsSaga";

export function* rootSaga() {
  yield all([
    //nghiep vu cuberbugs
    console.log("rootSaga"),
  ]);
}
//dua vao action type de quan li
