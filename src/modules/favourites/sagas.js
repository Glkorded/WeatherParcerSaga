import { call, put, takeLatest } from "redux-saga/effects"
import { setFavouritesSuccess, setFavouritesRequest } from "./duck"
import * as Repository from "./Repository"

const getFavouritesSaga = function*() {
  const data = yield call(Repository.getFavourites) //here we get localstorage
  yield put(setFavouritesSuccess(data))
}

const setFavouritesSaga = function*({ payload: favorite }) {
  yield call(Repository.setFavourites, favorite)
  yield put(setFavouritesSuccess(favorite))
}

const favouritesSaga = function*() {
  yield call(getFavouritesSaga)
  yield takeLatest(setFavouritesRequest, setFavouritesSaga)
}

export default favouritesSaga
