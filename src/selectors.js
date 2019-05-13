import * as R from "ramda";

const getCityWeather = R.prop("cityWeather");

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
);

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("cityWeatherInfo")
);

const getWeather = R.prop("weather");

export const getWeatherIsLoading = R.pipe(
  getWeather,
  R.prop("isLoading")
);

export const getWeatherInfo = R.pipe(
  getWeather,
  R.prop("weatherInfo")
);
// TODO: написать модули //DONE
// TODO: нaписать селекторы //DONE
// TODO: положить в стэйт значение инпута в фэйворитс и использовать reselect для выборки данных
// TODO: написать тест для редьюсеров и селекторов
