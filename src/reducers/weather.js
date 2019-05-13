import { GET_WEATHER_SUCCESS, GET_WEATHER_REQUEST } from "../actions";
import { combineReducers } from "redux";

const weatherInfo = (state = [], action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return true;
    case GET_WEATHER_SUCCESS:
      return false;

    default:
      return state;
  }
};

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;
