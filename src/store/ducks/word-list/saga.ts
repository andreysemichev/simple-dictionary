import { call, takeLatest, put } from "redux-saga/effects";
import { fetch } from "api/wordList";
import { setItems, setLoadingStatus } from "./actionCreators";
import { ActionsTypes, FetchActionInterface } from "./contracts/actionTypes";
import { LoadingStatus, Item } from "./contracts/state";

let parseResult = (result: any): Item => {
    let _transcription = "-";
    if (result.hwi.prs) {
        _transcription = result.hwi.prs[0].ipa;
    }

    const wrapper = {
        id: result.hwi.hw,
        word: result.hwi.hw,
        part: result.fl,
        transcription: _transcription,
        description: result.shortdef[0]
    };

    return wrapper;
}

export function* fetchRequest({ payload }: FetchActionInterface): any {
    try {
        const items = yield call(fetch, payload);
        const wrapper = [];

        if (items.length === 0) {
            yield put(setItems(items));
            return;
        }

        if (typeof items[0] === "string") {
            for (let i = 0; i < items.length && i < 10; i++) {
                const innerItems = yield call(fetch, items[i]);
                wrapper.push(parseResult(innerItems[0]));
            }
        } else {
            wrapper.push(parseResult(items[0]));
        }

        yield put(setItems(wrapper));
    } catch (error) {
        yield put(setLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* saga() {
    yield takeLatest(ActionsTypes.FETCH, fetchRequest);
}

export default saga;