import { createAction } from "redux-actions";

export const GET_CITY_WEATHER_REQUEST = "GET_CITY_WEATHER_REQUEST";
export const GET_CITY_WEATHER_SUCCESS = "GET_CITY_WEATHER_SUCCESS";
export const GET_CITY_WEATHER_FAILURE = "GET_CITY_WEATHER_FAILURE";

export const getCityWeatherRequest = createAction(GET_CITY_WEATHER_REQUEST);
export const getCityWeatherSuccess = createAction(GET_CITY_WEATHER_SUCCESS);
export const getCityWeatherFailure = createAction(GET_CITY_WEATHER_FAILURE);
