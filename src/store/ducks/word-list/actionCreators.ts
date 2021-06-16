import { State } from "./contracts/state";
import { ActionsTypes, SetItemsActionInterface, FetchActionInterface, SetLoadingStatusActionInterface } from "./contracts/actionTypes";

export const setItems = (payload: State["items"]): SetItemsActionInterface => ({
    type: ActionsTypes.SET_ITEMS,
    payload: payload
});

export const fetch = (word: string): FetchActionInterface => ({
    type: ActionsTypes.FETCH,
    payload: word
});

export const setLoadingStatus = (payload: State["loadingStatus"]): SetLoadingStatusActionInterface => ({
    type: ActionsTypes.SET_LOADING_STATUS,
    payload: payload
});

export type Actions =
    | SetItemsActionInterface
    | FetchActionInterface;