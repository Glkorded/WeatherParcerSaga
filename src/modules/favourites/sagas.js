import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  GET_TO_LOCAL_STORAGE_REQUEST,
  getToLocalStorageSuccess
} from "./actions";

const getToTheLocalStorageSaga = function*() {
  const data = yield call();
  yield put(getToLocalStorageSuccess(data));
};

const getToTheLocalStorageSagaWatcher = function*() {
  yield takeLatest(GET_TO_LOCAL_STORAGE_REQUEST, getToTheLocalStorageSaga);
};

const rootSaga = function*() {
  yield all([getToTheLocalStorageSagaWatcher()]);
};

export default rootSaga;
