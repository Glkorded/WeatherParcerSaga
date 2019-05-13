import { GET_WEATHER_SUCCESS /*GET_WEATHER_REQUEST*/ } from "../actions";
import { combineReducers } from "redux";
import { handleAction, handleActions, combineActions } from "redux-actions";

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

/*const weatherInfo = (state = [], action) => {
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
};*/

const weather = combineReducers({
  weatherInfo,
  isLoading
});

export default weather;
