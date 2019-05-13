import { call, put, takeLatest, all } from "redux-saga/effects";
import * as WeatherManager from "./managers";
import { getCityWeatherSuccess, GET_CITY_WEATHER_REQUEST } from "./actions";

const getCityWeatherSaga = function*(action) {
  const detailedData = yield call(
    WeatherManager.getCityWeatherData,
    action.payload
  );
  yield put(getCityWeatherSuccess(detailedData.consolidated_weather));
};

const getCityWeatherSagaWatcher = function*() {
  yield takeLatest(GET_CITY_WEATHER_REQUEST, getCityWeatherSaga);
};

const rootSaga = function*() {
  yield all([getCityWeatherSagaWatcher()]);
};

export default rootSaga;
