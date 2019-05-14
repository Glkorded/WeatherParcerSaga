import { put, takeLatest, all } from "redux-saga/effects";
import {
  GET_INPUT_REQUEST,
  getInputSuccess,
  GET_TO_LOCAL_STORAGE_REQUEST,
  getToLocalStorageSuccess
} from "./actions";

const getToTheLocalStorageSaga = function*() {
  const data = yield JSON.parse(localStorage.getItem("favouriteData")); //here we get localstorage
  yield put(getToLocalStorageSuccess(data));
};

const getToTheLocalStorageSagaWatcher = function*() {
  yield takeLatest(GET_TO_LOCAL_STORAGE_REQUEST, getToTheLocalStorageSaga);
};

const getInputSaga = function*(action) {
  const data = action.payload;
  yield put(getInputSuccess(data));
};

const getInputSagaWatcher = function*() {
  yield takeLatest(GET_INPUT_REQUEST, getInputSaga);
};

const rootSaga = function*() {
  yield all([getToTheLocalStorageSagaWatcher(), getInputSagaWatcher()]);
};

export default rootSaga;
