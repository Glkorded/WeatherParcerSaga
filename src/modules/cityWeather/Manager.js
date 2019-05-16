import pipeP from "../../utils/utils"

const handleStatus = () => response => {
  if (response.status > 400 && response.status < 600) {
    throw new Error(response.status)
  } else {
    return response
  }
}

export const getCityWeatherData = pipeP(
  cityId => fetch(`${process.env.REACT_APP_URL}/location/${cityId}`),
  response => handleStatus()(response),
  response => response.json()
)
