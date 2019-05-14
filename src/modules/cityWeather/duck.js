import * as R from "ramda";
import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";

export const getCityWeather = R.prop("cityWeather");

//==========================================================================

export const getCityWeatherRequest = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_REQUEST"
);
export const getCityWeatherSuccess = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_SUCCESS"
);
export const getCityWeatherFailure = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_FAILURE"
);

export const cityWeatherInfo = handleAction(
  [getCityWeatherSuccess],
  (state, action) => action.payload,
  []
);

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("cityWeatherInfo")
);

//==========================================================================

export const isLoading = handleActions(
  {
    [getCityWeatherRequest]: () => true,
    [getCityWeatherSuccess]: () => false
  },
  false
);

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
);

//==========================================================================

const cityWeather = combineReducers({
  cityWeatherInfo,
  isLoading
});

export default cityWeather;
