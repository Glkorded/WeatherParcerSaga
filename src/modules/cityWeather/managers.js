import api from "../../api";

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
