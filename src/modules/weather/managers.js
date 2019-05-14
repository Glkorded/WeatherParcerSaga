import api from "../../api";
import pipeP from "../../utils";

export const getWeatherData = pipeP(
  name =>
    fetch(api.getInputData(name)).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }),
  response => response.json()
);
