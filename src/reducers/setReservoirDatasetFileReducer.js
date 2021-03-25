const setReservoirDatasetFileReducer = (state = null, action) => {
    if (action.type === 'DATASET_FILE_RESERVOIR') {
        return action.file[0];
    }

    return state;
};

export default setReservoirDatasetFileReducer;
