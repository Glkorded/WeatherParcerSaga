import { GET_WEATHER_SUCCESS } from "./actions";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

const weatherInfo = handleAction(
  GET_WEATHER_SUCCESS,
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

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;
