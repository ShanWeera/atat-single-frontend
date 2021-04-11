const setResidueCountReducer = (state = 0, action) => {
    if (action.type === 'RESIDUE_COUNT') {
        return action.count;
    }

    return state;
};

export default setResidueCountReducer;
