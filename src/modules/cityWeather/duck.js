import * as R from "ramda"
import { combineReducers } from "redux"
import { createAction, handleAction } from "redux-actions"
export const getCityWeather = R.prop("cityWeather")
const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "CITY_WEATHER/"
//==========================================================================
export const fetchCityWeatherRequest = createActionWithPrefix(
  "FETCH_CITY_WEATHER_REQUEST"
)
export const setCityWeather = createActionWithPrefix("SET_CITY_WEATHER")
export const getCityWeatherFailure = createActionWithPrefix(
  "GET_CITY_WEATHER_FAILURE"
)

export const items = handleAction(
  setCityWeather,
  (state, action) => action.payload,
  []
)

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("items")
)
//==========================================================================
export const setIsLoading = createActionWithPrefix("SET_IS_LOADING")

export const isLoading = handleAction(
  setIsLoading,
  (state, action) => action.payload,
  false
)

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
)

//==========================================================================

const cityWeather = combineReducers({
  items,
  isLoading
})

export default cityWeather
