import { createAction } from "redux-actions";

export const GET_TO_LOCAL_STORAGE_REQUEST = "GET_TO_LOCAL_STORAGE_REQUEST";
export const GET_TO_LOCAL_STORAGE_SUCCESS = "GET_TO_LOCAL_STORAGE_SUCCESS";
export const GET_TO_LOCAL_STORAGE_FAILURE = "GET_TO_LOCAL_STORAGE_FAILURE";

export const getToLocalStorageRequest = createAction(
  GET_TO_LOCAL_STORAGE_REQUEST
);

export const getToLocalStorageSuccess = createAction(
  GET_TO_LOCAL_STORAGE_SUCCESS
);

export const getToLocalStorafeFailure = createAction(
  GET_TO_LOCAL_STORAGE_FAILURE
);
