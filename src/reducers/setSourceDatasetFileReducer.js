const setSourceDatasetFileReducer = (state = null, action) => {
    if (action.type === 'DATASET_FILE_SOURCE') {
        return action.file[0];
    }

    return state;
};

export default setSourceDatasetFileReducer;
