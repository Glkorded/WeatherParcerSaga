import { put, takeLatest, all } from "redux-saga/effects";
import {
  getInputRequest,
  getInputSuccess,
  getFavouritesRequest,
  getFavouritesSuccess
} from "./duck";

const getToTheLocalStorageSaga = function*() {
  const data = yield JSON.parse(localStorage.getItem("favouriteData")); //here we get localstorage
  yield put(getFavouritesSuccess(data));
};

const getToTheLocalStorageSagaWatcher = function*() {
  yield takeLatest(getFavouritesRequest, getToTheLocalStorageSaga);
};

const getInputSaga = function*(action) {
  const data = action.payload;
  yield put(getInputSuccess(data));
};

const getInputSagaWatcher = function*() {
  // TODO: on action
  yield takeLatest(getInputRequest, getInputSaga);
  console.log(123);
};

// TODO: rename
const rootSaga = function*() {
  // TODO: retyping
  // yield call(getToTheLocalStorageSaga);
  // yield;
  yield all([getToTheLocalStorageSagaWatcher(), getInputSagaWatcher()]);
};

export default rootSaga;
