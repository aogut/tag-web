import {
  SAVE_NUMBERS,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS([]);

function numberEntryReducer(state = initialState, action) {
  console.log('-- numberEntryReducer state', state);
  console.log('-- numberEntryReducer action', action);
  switch (action.type) {
    case SAVE_NUMBERS:
      return [
        ...action.numbers,
        ...state
      ];
    default:
      return state;
  }
}

export default numberEntryReducer;
