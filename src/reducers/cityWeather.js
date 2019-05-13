import { GET_CITY_WEATHER_SUCCESS } from "../actions";
import { combineReducers } from "redux";
import { handleAction, handleActions, combineActions } from "redux-actions";

const cityWeatherInfo = handleAction(
  GET_CITY_WEATHER_SUCCESS,
  (state, action) => action.payload,
  []
);

const isLoading = handleActions(
  {
    GET_WEATHER_REQUEST: (state, action) => true,
    GET_WEATHER_SUCCESS: (state, action) => false
  },
  false
);

const cityWeather = combineReducers({
  cityWeatherInfo,
  isLoading
});

export default cityWeather;
