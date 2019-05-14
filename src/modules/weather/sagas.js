import { call, put, takeLatest } from "redux-saga/effects";
import * as WeatherManager from "./managers";
import { getWeatherSuccess, getWeatherRequest } from "./duck";

export const getWeatherSaga = function*(action) {
  const data = yield call(WeatherManager.getWeatherData, action.payload);
  yield put(getWeatherSuccess(data));
};

const weatherSaga = function*() {
  yield takeLatest(getWeatherRequest, getWeatherSaga);
};

export default weatherSaga;
