import * as R from "ramda";
import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";

export const getWeatherRequest = createAction("WEATHER/GET_WEATHER_REQUEST");
export const getWeatherSuccess = createAction("WEATHER/GET_WEATHER_SUCCESS");
export const getWeatherFailure = createAction("WEATHER/GET_WEATHER_FAILURE");

export const weatherInfo = handleAction(
  [getWeatherSuccess],
  (state, action) => action.payload,
  []
);

export const isLoading = handleActions(
  {
    [getWeatherRequest]: R.T,
    [getWeatherSuccess]: R.F
  },
  false
);

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;

export const getWeather = R.prop("weather");

export const getWeatherIsLoading = R.pipe(
  getWeather,
  R.prop("isLoading")
);

export const getWeatherInfo = R.pipe(
  getWeather,
  R.prop("weatherInfo")
);
