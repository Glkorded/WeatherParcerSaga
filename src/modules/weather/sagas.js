import { call, put, takeLatest } from "redux-saga/effects"
import * as WeatherManager from "./Manager"
import { setWeather, fetchWeatherRequest, setIsLoading } from "./duck"

// TODO: rename with fetch
export const fetchWeatherSaga = function*(action) {
  let data
  try {
    data = yield call(WeatherManager.fetchWeatherData, action.payload)
  } catch (err) {
    console.log(err)
    yield put(setIsLoading(false))
    return
  }
  yield put(setWeather(data))
  yield put(setIsLoading(false))
}

const weatherSaga = function*() {
  yield takeLatest(fetchWeatherRequest, fetchWeatherSaga)
}

export default weatherSaga
