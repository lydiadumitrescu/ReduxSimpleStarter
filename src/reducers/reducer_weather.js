import { FEATCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  console.log(action);
  switch(action.type){
    case FEATCH_WEATHER:
    // return a new state , do not alter the old state object
      //return state.concat([action.payload.data]);
      {
      return [ action.payload.data, ...state] ;
      }
  }
  return state;
}
