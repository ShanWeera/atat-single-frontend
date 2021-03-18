const setResultsReducer = (state = null, action) => {
  if (action.type === 'RESULT_ID') {
    return action.id;
  }

  return state;
};

export default setResultsReducer;
