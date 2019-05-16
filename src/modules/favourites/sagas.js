import { call, put, takeLatest } from "redux-saga/effects"
import {
  getInputRequest,
  getInputSuccess,
  getFavouritesSuccess,
  setFavouritesRequest,
  setFavouritesSuccess
} from "./duck"
import * as Repository from "./Repository"

const getFavouritesSaga = function*() {
  const data = yield call(Repository.getFavourites) //here we get localstorage
  yield put(getFavouritesSuccess(data))
}

const setFavouritesSaga = function*({ payload: favorite }) {
  yield put(setFavouritesSuccess(favorite))
}

//TODO: get rid of it
const getInputSaga = function*(action) {
  const data = action.payload
  yield put(getInputSuccess(data))
}

const favouritesSaga = function*() {
  yield call(getFavouritesSaga)
  yield takeLatest(setFavouritesRequest, setFavouritesSaga)
  yield takeLatest(getInputRequest, getInputSaga)
}

export default favouritesSaga
