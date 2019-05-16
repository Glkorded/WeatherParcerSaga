import { call, put, takeLatest } from "redux-saga/effects"
import * as cityWeatherManager from "./Manager"
import { setCityWeather, fetchCityWeatherRequest, setIsLoading } from "./duck"

const getCityWeatherSaga = function*(action) {
  let detailedData
  try {
    detailedData = yield call(
      cityWeatherManager.getCityWeatherData,
      action.payload
    )
  } catch (err) {
    console.log(err)
    yield put(setIsLoading(false))
    return
  }
  yield put(setCityWeather(detailedData.consolidated_weather))
  yield put(setIsLoading(false))
}

const cityWeatherSaga = function*() {
  yield takeLatest(fetchCityWeatherRequest, getCityWeatherSaga)
}

export default cityWeatherSaga
