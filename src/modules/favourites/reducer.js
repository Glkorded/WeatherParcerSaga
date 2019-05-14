import { GET_INPUT_SUCCESS, GET_TO_LOCAL_STORAGE_SUCCESS } from "./actions";
import { handleAction } from "redux-actions";
import { combineReducers } from "redux";

// actions
export const items = handleAction(
  GET_TO_LOCAL_STORAGE_SUCCESS,
  (state, action) => action.payload,
  []
);

// selector

// actions
export const inputInfo = handleAction(
  GET_INPUT_SUCCESS,
  (state, action) => action.payload,
  ""
);

const favourites = combineReducers({
  items,
  inputInfo
});

export default favourites;
