import { proxy, url } from "../../utils/api";
import pipeP from "../../utils/utils";

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
