import * as R from "ramda";

export const getWeather = R.prop("weather");

export const getWeatherIsLoading = R.pipe(
  getWeather,
  R.prop("isLoading")
);

export const getWeatherInfo = R.pipe(
  getWeather,
  R.prop("weatherInfo")
);
