import { createAction, handleAction } from "redux-actions";
import { combineReducers } from "redux";
import * as R from "ramda";
import { createSelector } from "reselect";

const getFavourites = R.prop("favourites");

//==========================================================================

export const getFavouritesRequest = createAction(
  "FAVOURITES/GET_FAVOURITES_REQUEST"
);
export const getFavouritesSuccess = createAction(
  "FAVOURITES/GET_FAVOURITES_SUCCESS"
);
export const getFavouritesFailure = createAction(
  "FAVOURITES/GET_FAVOURITES_FAILURE"
);

export const items = handleAction(
  getFavouritesSuccess,
  (state, action) => action.payload,
  []
);
export const getItems = R.pipe(
  getFavourites,
  R.prop("items")
);

//==========================================================================

export const getInputRequest = createAction("GET_INPUT_REQUEST");
export const getInputSuccess = createAction("GET_INPUT_SUCCESS");

export const inputInfo = handleAction(
  getInputSuccess,
  (state, action) => action.payload,
  ""
);

export const getInputInfo = R.pipe(
  getFavourites,
  R.prop("inputInfo")
);

//==========================================================================

const favourites = combineReducers({
  items,
  inputInfo
});

export default favourites;

export const getFilteredInfo = createSelector(
  [getItems, getInputInfo],
  (items, inputInfo) =>
    items.filter(elem =>
      elem.title.toLowerCase().includes(inputInfo.toLowerCase())
    )
);
