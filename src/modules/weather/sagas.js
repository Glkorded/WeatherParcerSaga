import { call, put, takeLatest, all } from "redux-saga/effects";
import * as WeatherManager from "./managers";
import { getWeatherSuccess, GET_WEATHER_REQUEST } from "./actions";

export const getWeatherSaga = function*(action) {
  console.log(action, action.payload);
  const data = yield call(WeatherManager.getWeatherData, action.payload);
  console.log(data, "data Saga");
  yield put(getWeatherSuccess(data));
};

const getWeatherSagaWatcher = function*() {
  yield takeLatest(GET_WEATHER_REQUEST, getWeatherSaga);
};

const rootSaga = function*() {
  yield all([getWeatherSagaWatcher()]);
};

export default rootSaga;
