import { all } from "redux-saga/effects"

import { weatherSaga } from "./weather"
import { cityWeatherSaga } from "./cityWeather"
import { favouritesSaga } from "./favourites"

const rootSaga = function*() {
  //this saga will be called immidiately without action dispatch
  yield all([weatherSaga(), cityWeatherSaga(), favouritesSaga()])
}

export default rootSaga
