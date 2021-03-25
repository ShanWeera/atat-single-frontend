const setSourceDatasetFileReducer = (state = null, action) => {
    if (action.type === 'DATASET_FILE_SOURCE') {
        return {name: action.name, sequences: action.sequences};
    }

    return state;
};

export default setSourceDatasetFileReducer;
