import { proxy, url } from "../../api";
import pipeP from "../../utils";

export const getCityWeatherData = pipeP(
  cityId => fetch(`${proxy}${url}/location/${cityId}`),
  response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  },
  response => response.json()
);
