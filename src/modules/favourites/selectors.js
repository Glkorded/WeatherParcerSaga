import * as R from "ramda";
import { createSelector } from "reselect";
export const getFavourites = R.prop("favourites");

export const getLocalStorageInfo = R.pipe(
  getFavourites,
  R.prop("localStorageInfo")
);

export const getInputInfo = R.pipe(
  getFavourites,
  R.prop("inputInfo")
);

export const getFilteredInfo = createSelector(
  [getLocalStorageInfo, getInputInfo],
  (localStorageInfo, inputInfo) =>
    localStorageInfo.filter(elem =>
      elem.title.toLowerCase().includes(inputInfo.toLowerCase())
    )
);
