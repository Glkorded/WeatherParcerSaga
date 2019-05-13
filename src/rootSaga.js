import { all } from "redux-saga/effects";

import getWeatherSagaWatcher from "./modules/weather/sagas";
import getCityWeatherSagaWatcher from "./modules/cityWeather/sagas";

const rootSaga = function*() {
  yield all([getWeatherSagaWatcher(), getCityWeatherSagaWatcher()]);
};

export default rootSaga;
