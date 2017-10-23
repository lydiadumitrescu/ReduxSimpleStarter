import { combineReducers } from 'redux';
import SrcFiles from './src-files';

const rootReducer = combineReducers({
  srcFiles: SrcFiles
});

export default rootReducer;
