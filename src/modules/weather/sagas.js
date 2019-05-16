import { call, put, takeLatest } from "redux-saga/effects"
import * as WeatherManager from "./Manager"
import { getWeatherSuccess, getWeatherRequest, setIsLoading } from "./duck"

export const getWeatherSaga = function*(action) {
  let data
  try {
    data = yield call(WeatherManager.getWeatherData, action.payload)
  } catch (err) {
    console.log(err)
    yield put(setIsLoading(false))
    return
  }
  yield put(getWeatherSuccess(data))
}

const weatherSaga = function*() {
  yield takeLatest(getWeatherRequest, getWeatherSaga)
}

export default weatherSaga
