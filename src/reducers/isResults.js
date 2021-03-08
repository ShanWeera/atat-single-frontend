import {createStore} from "redux"

const isResultsReducer = (state = false, action) => {
    return action.type === 'IS_RESULTS'
};

export default createStore(
    isResultsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
