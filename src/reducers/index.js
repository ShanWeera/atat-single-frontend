import { combineReducers } from 'redux';
import isResultsReducer from './isResultsReducer';
import setResultsReducer from './setResultsReducer';
import setPositionReducer from './setPositionReducer';
import setReservoirDatasetFileReducer from "./setReservoirDatasetFileReducer";
import setSourceDatasetFileReducer from "./setSourceDatasetFileReducer";
import setUploadDatasetValidatedReducer from "./setUploadDatasetValidatedReducer";

const allReducers = combineReducers({
  isResults: isResultsReducer,
  jobID: setResultsReducer,
  position: setPositionReducer,
  source_file: setSourceDatasetFileReducer,
  reservoir_file: setReservoirDatasetFileReducer,
  uploadDatasetValidated: setUploadDatasetValidatedReducer
});

export default allReducers;
