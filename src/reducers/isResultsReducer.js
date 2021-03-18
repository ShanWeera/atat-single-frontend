const isResultsReducer = (state = false, action) => {
  if (action.type === 'IS_RESULTS') {
    return true;
  }

  return state;
};

export default isResultsReducer;
