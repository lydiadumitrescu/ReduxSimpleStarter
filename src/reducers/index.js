import { combineReducers } from 'redux';
import ImgFiles from './reducer_imgFiles';
import VideoFiles from './reducer_videoFiles';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  imgFiles: ImgFiles,
  videoFiles: VideoFiles
});

export default rootReducer;
