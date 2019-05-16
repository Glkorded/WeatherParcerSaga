import { proxy, url } from "../../utils/api"
import pipeP from "../../utils/utils"

export const getCityWeatherData = pipeP(
  cityId => fetch(`${proxy}${url}/location/${cityId}`),
  response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  },
  response => response.json()
)
