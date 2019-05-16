import { call, put, takeLatest } from "redux-saga/effects"
import * as cityWeatherManager from "./Manager"
import {
  getCityWeatherSuccess,
  getCityWeatherRequest,
  setIsLoading
} from "./duck"

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
  yield put(getCityWeatherSuccess(detailedData.consolidated_weather))
}

const cityWeatherSaga = function*() {
  yield takeLatest(getCityWeatherRequest, getCityWeatherSaga)
}

export default cityWeatherSaga
