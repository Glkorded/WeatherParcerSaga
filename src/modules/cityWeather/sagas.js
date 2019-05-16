import { call, put, takeLatest } from "redux-saga/effects"
import * as cityWeatherManager from "./Manager"
import { getCityWeatherSuccess, getCityWeatherRequest } from "./duck"

const getCityWeatherSaga = function*(action) {
  const detailedData = yield call(
    cityWeatherManager.getCityWeatherData,
    action.payload
  )
  yield put(getCityWeatherSuccess(detailedData.consolidated_weather))
}

const cityWeatherSaga = function*() {
  yield takeLatest(getCityWeatherRequest, getCityWeatherSaga)
}

export default cityWeatherSaga
