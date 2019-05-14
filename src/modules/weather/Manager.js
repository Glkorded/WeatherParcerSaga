import { proxy, url } from "../../api";
import pipeP from "../../utils";

export const getWeatherData = pipeP(
  name => fetch(`${proxy}${url}/location/search/?query=${name}`),
  response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  },
  response => response.json()
);
