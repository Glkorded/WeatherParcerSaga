import { GET_INPUT_SUCCESS, GET_TO_LOCAL_STORAGE_SUCCESS } from "./actions";
import { handleAction } from "redux-actions";
import { combineReducers } from "redux";

export const localStorageInfo = handleAction(
  GET_TO_LOCAL_STORAGE_SUCCESS,
  (state, action) => action.payload,
  []
);

export const inputInfo = handleAction(
  GET_INPUT_SUCCESS,
  (state, action) => action.payload,
  ""
);

const favourites = combineReducers({
  localStorageInfo,
  inputInfo
});

export default favourites;
