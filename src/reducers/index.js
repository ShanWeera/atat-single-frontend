import { combineReducers } from 'redux';
import isResultsReducer from './isResultsReducer';
import setResultsReducer from './setResultsReducer';
import setPositionReducer from './setPositionReducer';
import setReservoirDatasetFileReducer from "./setReservoirDatasetFileReducer";
import setSourceDatasetFileReducer from "./setSourceDatasetFileReducer";
import setUploadDatasetValidatedReducer from "./setUploadDatasetValidatedReducer";
import setKmerLengthReducer from "./setKmerLengthReducer";
import setUserEmailReducer from "./setUserEmailReducer";
import setSequenceCountReducer from "./setSequenceCountReducer";
import setResidueCountReducer from "./setResidueCountReducer";

const allReducers = combineReducers({
  isResults: isResultsReducer,
  jobID: setResultsReducer,
  position: setPositionReducer,
  source_file: setSourceDatasetFileReducer,
  reservoir_file: setReservoirDatasetFileReducer,
  uploadDatasetValidated: setUploadDatasetValidatedReducer,
  kmerLength: setKmerLengthReducer,
  userEmail: setUserEmailReducer,
  residueCount: setResidueCountReducer,
  sequencesCount: setSequenceCountReducer
});

export default allReducers;
