import * as R from "ramda";
export const getCityWeather = R.prop("cityWeather");

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
);

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("cityWeatherInfo")
);
