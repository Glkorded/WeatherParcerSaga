import * as R from "ramda"
import { combineReducers } from "redux"
import { createAction, handleAction, handleActions } from "redux-actions"
export const getCityWeather = R.prop("cityWeather")
const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "CITY_WEATHER/"
//==========================================================================
export const getCityWeatherRequest = createActionWithPrefix(
  "GET_CITY_WEATHER_REQUEST"
)
export const getCityWeatherSuccess = createActionWithPrefix(
  "GET_CITY_WEATHER_SUCCESS"
)
export const getCityWeatherFailure = createActionWithPrefix(
  "GET_CITY_WEATHER_FAILURE"
)

export const cityWeatherInfo = handleAction(
  [getCityWeatherSuccess],
  (state, action) => action.payload,
  []
)

export const getCityWeatherInfo = R.pipe(
  getCityWeather,
  R.prop("cityWeatherInfo")
)
//==========================================================================
export const setIsLoading = createActionWithPrefix("SET_IS_LOADING")

export const isLoading = handleActions(
  {
    [getCityWeatherRequest]: () => true,
    [getCityWeatherSuccess]: () => false,
    [setIsLoading]: (state, action) => action.payload
  },
  false
)

export const getCityIsLoading = R.pipe(
  getCityWeather,
  R.prop("isLoading")
)

//==========================================================================

const cityWeather = combineReducers({
  cityWeatherInfo,
  isLoading
})

export default cityWeather
