import {combineReducers} from "redux"
import isResultsReducer from "./isResultsReducer";
import setResultsReducer from "./setResultsReducer";
import setPositionReducer from "./setPositionReducer";

const allReducers = combineReducers({
    isResults: isResultsReducer,
    resultId: setResultsReducer,
    position: setPositionReducer
})

export default allReducers
