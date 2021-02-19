import { FETCH_RATES } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_RATES:
      return action.payload;
    default:
      return state;
  }
};