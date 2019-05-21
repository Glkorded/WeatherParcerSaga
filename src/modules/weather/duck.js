import * as R from "ramda"
import { combineReducers } from "redux"
import { createAction, handleAction } from "redux-actions"
export const fetchWeather = R.prop("weather")
const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "WEATHER/"
//==========================================================================
export const fetchWeatherRequest = createActionWithPrefix(
  "FETCH_WEATHER_REQUEST"
)
export const setWeather = createActionWithPrefix("SET_WEATHER")

export const items = handleAction(
  setWeather,
  (state, { payload }) => payload,
  []
)

export const fetchWeatherItems = R.pipe(
  fetchWeather,
  R.prop("items")
)

//==========================================================================
export const setIsLoading = createActionWithPrefix("SET_IS_LOADING")

export const isLoading = handleAction(
  setIsLoading,
  (state, { payload }) => payload,
  false
)

export const fetchWeatherIsLoading = R.pipe(
  fetchWeather,
  R.prop("isLoading")
)

//==========================================================================

const weather = combineReducers({
  items,
  isLoading
})

export default weather
