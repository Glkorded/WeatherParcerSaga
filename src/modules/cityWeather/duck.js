import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";
import * as R from "ramda";

//actions
export const getCityWeatherRequest = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_REQUEST"
);
export const getCityWeatherSuccess = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_SUCCESS"
);
export const getCityWeatherFailure = createAction(
  "CITY_WEATHER/GET_CITY_WEATHER_FAILURE"
);

//Get city weather
const cityWeatherInfo = handleAction(
  [getCityWeatherSuccess],
  (state, action) => action.payload,
  []
);

const getCityWeather = R.prop("cityWeather");

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("cityWeatherInfo")
);

//City is loading
const isLoading = handleActions(
  {
    [getCityWeatherRequest]: R.T,
    [getCityWeatherSuccess]: R.F
  },
  false
);

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
);

const cityWeather = combineReducers({
  cityWeatherInfo,
  isLoading
});
export default cityWeather;
