import { put, takeLatest } from "redux-saga/effects";
import {
  getInputRequest,
  getInputSuccess,
  getFavouritesRequest,
  getFavouritesSuccess
} from "./duck";

const getFavouritesSaga = function*() {
  const data = yield JSON.parse(localStorage.getItem("favouriteData")); //here we get localstorage
  yield put(getFavouritesSuccess(data));
};

const getInputSaga = function*(action) {
  const data = action.payload;
  yield put(getInputSuccess(data));
};

// TODO: rename
const favouritesSaga = function*() {
  // TODO: retyping
  yield takeLatest(getFavouritesRequest, getFavouritesSaga);
  yield takeLatest(getInputRequest, getInputSaga);
};

export default favouritesSaga;
