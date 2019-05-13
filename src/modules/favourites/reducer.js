import { GET_TO_LOCAL_STORAGE_SUCCESS } from "./actions";
import { handleAction } from "redux-actions";

export const localStorageInfo = handleAction(
  GET_TO_LOCAL_STORAGE_SUCCESS,
  (state, action) => action.payload,
  []
);

export default localStorageInfo;
