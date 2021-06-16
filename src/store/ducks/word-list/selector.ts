import { createSelector } from "reselect";
import { RootState } from "store/store";
import { LoadingStatus, State } from "./contracts/state";

export const selectWordList = (state: RootState): State => state.wordList;
export const selectWordListLoadingStatus = (state: RootState): State["loadingStatus"] => selectWordList(state).loadingStatus;
export const selectWordListIsLoading = (state: RootState): boolean =>  selectWordListLoadingStatus(state) === LoadingStatus.LOADING;

export const selectWordListItems = createSelector(selectWordList, wordList => wordList.items);