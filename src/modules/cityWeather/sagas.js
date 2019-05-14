import { call, put, takeLatest, all } from "redux-saga/effects";
import * as WeatherManager from "./managers";
import { getCityWeatherSuccess, getCityWeatherRequest } from "./duck";

const getCityWeatherSaga = function*(action) {
  const detailedData = yield call(
    WeatherManager.getCityWeatherData,
    action.payload
  );
  yield put(getCityWeatherSuccess(detailedData.consolidated_weather));
};

const getCityWeatherSagaWatcher = function*() {
  yield takeLatest(getCityWeatherRequest, getCityWeatherSaga);
};

const rootSaga = function*() {
  yield all([getCityWeatherSagaWatcher()]);
};

export default rootSaga;
