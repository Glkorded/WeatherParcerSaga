import { all } from "redux-saga/effects";

import getWeatherSagaWatcher from "./modules/weather/sagas";
import getCityWeatherSagaWatcher from "./modules/cityWeather/sagas";
import getToLocalStorageSagaWatcher from "./modules/favourites/sagas";

const rootSaga = function*() {
  yield all([
    getWeatherSagaWatcher(),
    getCityWeatherSagaWatcher(),
    getToLocalStorageSagaWatcher()
  ]);
};

export default rootSaga;
