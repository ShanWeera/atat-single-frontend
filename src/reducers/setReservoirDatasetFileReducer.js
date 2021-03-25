const setReservoirDatasetFileReducer = (state = null, action) => {
    if (action.type === 'DATASET_FILE_RESERVOIR') {
        return {name: action.name, sequences: action.sequences};
    }

    return state;
};

export default setReservoirDatasetFileReducer;
