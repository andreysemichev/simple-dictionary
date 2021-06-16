import produce, { Draft } from "immer";

import { Actions } from "./actionCreators";
import { LoadingStatus, State } from "./contracts/state";
import { ActionsTypes } from "./contracts/actionTypes";

const initialState: State = {
    items: null,
    loadingStatus: LoadingStatus.NEVER
};

export const reducer = produce((draft: Draft<State>, action: Actions) => {
    switch (action.type) {
        case ActionsTypes.SET_ITEMS: {
            draft.items = action.payload;
            draft.loadingStatus = LoadingStatus.SUCCESSFUL;
            break;
        }
        case ActionsTypes.FETCH: {
            draft.items = null;
            draft.loadingStatus = LoadingStatus.LOADING;
            break;
        }
    }
}, initialState);

export default reducer;