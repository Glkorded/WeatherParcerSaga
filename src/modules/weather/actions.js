import { createAction } from "redux-actions";

export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

export const getWeatherRequest = createAction(GET_WEATHER_REQUEST);
export const getWeatherSuccess = createAction(GET_WEATHER_SUCCESS);
export const getWeatherFailure = createAction(GET_WEATHER_FAILURE);