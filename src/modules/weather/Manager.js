import { proxy, url } from "../../utils/api"
import pipeP from "../../utils/utils"

// TODO:
// status 400 - 600
const handleStatus = () => response => {
  if (response.status > 400 && response.status < 600) {
    throw new Error(response.status)
  } else {
    return response
  }
}

export const fetchWeatherData = pipeP(
  name => fetch(`${proxy}${url}/location/search/?query=${name}`),
  response => handleStatus()(response),
  response => response.json()
)
