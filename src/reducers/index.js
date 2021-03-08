import {combineReducers} from "redux"
import isResultsReducer from "./isResultsReducer";
import setResultsReducer from "./setResultsReducer";

const allReducers = combineReducers({
    isResults: isResultsReducer,
    resultId: setResultsReducer
})

export default allReducers
