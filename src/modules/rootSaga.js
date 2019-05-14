import { all } from "redux-saga/effects";

import weatherSaga from "./weather/sagas";
import cityWeatherSaga from "./cityWeather/sagas";
import favouritesSaga from "./favourites/sagas";

const rootSaga = function*() {
  //this saga will be called immidiately without action dispatch
  yield all([weatherSaga(), cityWeatherSaga(), favouritesSaga()]);
};

export default rootSaga;
