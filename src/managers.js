import api from "./api";

export const getCityWeatherData = cityId =>
  fetch(api.getDetailedData(cityId))
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch();

export const getWeatherData = name =>
  fetch(api.getInputData(name))
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .catch();
