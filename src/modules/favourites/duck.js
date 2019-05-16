import { createAction, handleAction, handleActions } from "redux-actions"
import { combineReducers } from "redux"
import * as R from "ramda"
import { createSelector } from "reselect"

const getFavourites = R.prop("favourites")
const createActionWithPrefix = type => createAction(moduleName + type)
const moduleName = "FAVOURITES/"
//==========================================================================

export const getFavouritesRequest = createActionWithPrefix(
  "GET_FAVOURITES_REQUEST"
)
export const setFavouritesSuccess = createActionWithPrefix(
  "GET_FAVOURITES_SUCCESS"
)
export const getFavouritesFailure = createActionWithPrefix(
  "GET_FAVOURITES_FAILURE"
)
export const setFavouritesRequest = createActionWithPrefix(
  "SET_FAVOURITES_REQUEST"
)

// TODO: one action
export const items = handleAction(
  setFavouritesSuccess,
  (state, { payload }) => payload,
  []
)

export const getItems = R.pipe(
  getFavourites,
  R.prop("items")
)

//==========================================================================
export const setInput = createActionWithPrefix("SET_INPUT")
export const inputInfo = handleAction(
  setInput,
  (state, { payload }) => payload,
  ""
)
export const getInputInfo = R.pipe(
  getFavourites,
  R.prop("inputInfo")
)
//==========================================================================

export const getFilteredInfo = createSelector(
  [getItems, getInputInfo],
  (items, inputInfo) =>
    items.filter(elem =>
      elem.title.toLowerCase().includes(inputInfo.toLowerCase())
    )
)

const favourites = combineReducers({
  items,
  inputInfo
})

export default favourites
