import { call, put, takeLatest } from "redux-saga/effects";
import {
  getInputRequest,
  getInputSuccess,
  getFavouritesRequest,
  getFavouritesSuccess
} from "./duck";
import * as Repository from "./Repository";

const getFavouritesSaga = function*() {
  const data = yield call(Repository.getFavourites()); //here we get localstorage
  yield put(getFavouritesSuccess(data));
};

const getInputSaga = function*(action) {
  const data = action.payload;
  yield put(getInputSuccess(data));
};

const favouritesSaga = function*() {
  yield takeLatest(getFavouritesRequest, getFavouritesSaga);
  yield takeLatest(getInputRequest, getInputSaga);
};

export default favouritesSaga;
