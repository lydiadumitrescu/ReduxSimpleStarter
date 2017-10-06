// state argument is not application state, just the state
// this reducer is responsable for
export default function(state = null, action){
  //state +=1;
  console.log(action);

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
  //return non undefined value; null allowed
}
