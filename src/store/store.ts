import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import WordListState from "./ducks/word-list/contracts/state";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    wordList: WordListState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);