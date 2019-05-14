import { all } from "redux-saga/effects";

import weatherSaga from "./modules/weather/sagas";
import cityWeatherSaga from "./modules/cityWeather/sagas";
import favouritesSaga from "./modules/favourites/sagas";

const rootSaga = function*() {
  //this saga will be called immidiately without action dispatch
  yield all([weatherSaga(), cityWeatherSaga(), favouritesSaga()]);
};

export default rootSaga;
