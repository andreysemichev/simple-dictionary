import { Action } from "redux";
import { State } from "./state";

export enum ActionsTypes {
    SET_ITEMS = "WORD_LIST/SET_ITEMS",
    FETCH = "WORD_LIST/FETCH",
    SET_LOADING_STATUS = "WORD_LIST/SET_LOADING_STATUS",
};

export interface SetItemsActionInterface extends Action<ActionsTypes> {
    type: ActionsTypes.SET_ITEMS,
    payload: State["items"]
};

export interface FetchActionInterface extends Action<ActionsTypes> {
    type: ActionsTypes.FETCH
    payload: string
};

export interface SetLoadingStatusActionInterface extends Action<ActionsTypes> {
    type: ActionsTypes.SET_LOADING_STATUS,
    payload: State["loadingStatus"]
};