import { GET_CITY_WEATHER_SUCCESS, GET_CITY_WEATHER_REQUEST } from "../actions";
import { combineReducers } from "redux";

const cityWeatherInfo = (state = [], action) => {
  switch (action.type) {
    case GET_CITY_WEATHER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_CITY_WEATHER_REQUEST:
      return true;
    case GET_CITY_WEATHER_SUCCESS:
      return false;

    default:
      return state;
  }
};

const cityWeather = combineReducers({
  cityWeatherInfo,
  isLoading
});

export default cityWeather;
