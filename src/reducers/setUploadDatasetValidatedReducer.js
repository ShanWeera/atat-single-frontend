const setUploadDatasetValidatedReducer = (state = false, action) => {
    if (action.type === 'UPLOAD_DATASET_VALIDATED') {
        return action.status;
    }

    return state;
};

export default setUploadDatasetValidatedReducer;

