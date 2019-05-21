import { call, put, takeLatest } from 'redux-saga/effects'
import * as WeatherManager from './Manager'
import { setWeather, fetchWeatherRequest, setIsLoading } from './duck'

export const fetchWeatherSaga = function*({ payload }) {
  let data
  try {
    data = yield call(WeatherManager.fetchWeatherData, payload)
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
