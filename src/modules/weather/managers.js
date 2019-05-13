import api from "../../api";

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
