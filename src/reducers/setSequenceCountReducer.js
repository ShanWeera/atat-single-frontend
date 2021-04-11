const setSequenceCountReducer = (state = 0, action) => {
    if (action.type === 'SEQUENCES_COUNT') {
        return action.count;
    }

    return state;
};

export default setSequenceCountReducer;
