import * as R from "ramda"
import { combineReducers } from "redux"
import { createAction, handleAction, handleActions } from "redux-actions"

export const getWeather = R.prop("weather")
const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "WEATHER/"

//==========================================================================

export const getWeatherRequest = createActionWithPrefix("GET_WEATHER_REQUEST")
export const getWeatherSuccess = createActionWithPrefix("GET_WEATHER_SUCCESS")
export const getWeatherFailure = createActionWithPrefix("GET_WEATHER_FAILURE")

export const weatherInfo = handleAction(
  getWeatherSuccess,
  (state, action) => action.payload,
  []
)

export const getWeatherInfo = R.pipe(
  getWeather,
  R.prop("weatherInfo")
)

//==========================================================================
export const setIsLoading = createActionWithPrefix("SET_IS_LOADING")

export const isLoading = handleActions(
  {
    [getWeatherRequest]: () => true,
    [getWeatherSuccess]: () => false,
    [setIsLoading]: (state, action) => action.payload
  },
  false
)

export const getWeatherIsLoading = R.pipe(
  getWeather,
  R.prop("isLoading")
)

//==========================================================================

const weather = combineReducers({
  weatherInfo,
  isLoading
})

export default weather
