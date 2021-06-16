import { combineReducers } from "redux";
import wordList from "./ducks/word-list/reducer";


export const rootReducer = combineReducers({
    wordList: wordList,
});

export default rootReducer;