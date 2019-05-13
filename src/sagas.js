import { call, put, takeLatest, all } from "redux-saga/effects";
import * as WeatherManager from "./managers";
import {
  getWeatherSuccess,
  getCityWeatherSuccess,
  GET_CITY_WEATHER_REQUEST,
  GET_WEATHER_REQUEST
} from "./actions";

const getWeatherSaga = function*(action) {
  console.log(action, action.payload);
  const data = yield call(WeatherManager.getWeatherData, action.payload);
  //Here we need to transfer value from input-field
  console.log(data, "data Saga");
  yield put(getWeatherSuccess(data));
};

const getWeatherSagaWatcher = function*() {
  yield takeLatest(GET_WEATHER_REQUEST, getWeatherSaga);
};

const getCityWeatherSaga = function*(action) {
  console.log(action, action.payload);
  const detailedData = yield call(
    WeatherManager.getCityWeatherData,
    action.payload
  ); //Here we need to transfer match.params from react-router
  console.log(detailedData, "detailedData");
  yield put(getCityWeatherSuccess(detailedData.consolidated_weather));
};

const getCityWeatherSagaWatcher = function*() {
  yield takeLatest(GET_CITY_WEATHER_REQUEST, getCityWeatherSaga);
};

const rootSaga = function*() {
  yield all([getWeatherSagaWatcher(), getCityWeatherSagaWatcher()]);
};

export default rootSaga;
