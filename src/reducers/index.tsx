import { combineReducers } from 'redux';
import SrcFiles from './src-files';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  srcFiles: SrcFiles
});

export default rootReducer;
 