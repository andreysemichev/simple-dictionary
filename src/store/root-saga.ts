import { all } from "redux-saga/effects";
import wordListSaga from "./ducks/word-list/saga";


export function* rootSaga() {
    yield all([
        wordListSaga()
    ]);
}

export default rootSaga;