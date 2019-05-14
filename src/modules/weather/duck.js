import * as R from "ramda";
import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";

export const getWeather = R.prop("weather");
const moduleName = "WEATHER/";
// TODO:
const create = type => createAction(moduleName + type);

//==========================================================================

export const getWeatherRequest = create("GET_WEATHER_REQUEST");
export const getWeatherSuccess = create("GET_WEATHER_SUCCESS");
export const getWeatherFailure = create("GET_WEATHER_FAILURE");

export const weatherInfo = handleAction(
  getWeatherSuccess,
  (state, action) => action.payload,
  []
);

export const getWeatherInfo = R.pipe(
  getWeather,
  R.prop("weatherInfo")
);

//==========================================================================

export const isLoading = handleActions(
  {
    [getWeatherRequest]: () => true,
    [getWeatherSuccess]: () => false
  },
  false
);

export const getWeatherIsLoading = R.pipe(
  getWeather,
  R.prop("isLoading")
);

//==========================================================================

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;
