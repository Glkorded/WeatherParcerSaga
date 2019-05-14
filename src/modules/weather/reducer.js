import { GET_WEATHER_SUCCESS, getWeatherRequest } from "./actions";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

export const weatherInfo = handleAction(
  GET_WEATHER_SUCCESS,
  (state, action) => action.payload,
  []
);

export const isLoading = handleActions(
  {
    [getWeatherRequest]: (state, action) => true,
    GET_WEATHER_SUCCESS: (state, action) => false
  },
  false
);

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;
