export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";
export const GET_CITY_WEATHER_REQUEST = "GET_CITY_WEATHER_REQUEST";
export const GET_CITY_WEATHER_SUCCESS = "GET_CITY_WEATHER_SUCCESS";
export const GET_CITY_WEATHER_FAILURE = "GET_CITY_WEATHER_FAILURE";

export const getWeatherRequest = payload => ({
  type: GET_WEATHER_REQUEST,
  payload
});

export const getWeatherSuccess = payload => ({
  type: GET_WEATHER_SUCCESS,
  payload
});

export const getWeatherFailure = payload => ({
  type: GET_WEATHER_FAILURE,
  payload
});

export const getCityWeatherRequest = payload => ({
  type: GET_CITY_WEATHER_REQUEST,
  payload
});

export const getCityWeatherSuccess = payload => ({
  type: GET_CITY_WEATHER_SUCCESS,
  payload
});

export const getCityWeatherFailure = payload => ({
  type: GET_CITY_WEATHER_FAILURE,
  payload
});
