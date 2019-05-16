import * as R from "ramda"
import { combineReducers } from "redux"
import { createAction, handleAction, handleActions } from "redux-actions"

export const fetchWeather = R.prop("weather")

const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "WEATHER/"

//==========================================================================

export const fetchWeatherRequest = createActionWithPrefix("GET_WEATHER_REQUEST")
export const setWeather = createActionWithPrefix("SET_WEATHER")
export const fetchWeatherFailure = createActionWithPrefix("GET_WEATHER_FAILURE")

// TODO: rename to item

// TODO: on action setWeather
export const items = handleAction(
  setWeather,
  (state, action) => action.payload,
  []
)

export const fetchWeatherItems = R.pipe(
  fetchWeather,
  R.prop("items")
)

//==========================================================================
export const setIsLoading = createActionWithPrefix("SET_IS_LOADING")

// TODO: one action
export const isLoading = handleActions(
  {
    [fetchWeatherRequest]: () => true,
    [setWeather]: () => false,
    [setIsLoading]: (state, action) => action.payload
  },
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
