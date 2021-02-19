import { SELECTED_RATE } from '../actions/types';

export default (state = "EUR", action) => {
  switch(action.type) {
    case SELECTED_RATE:
      return action.payload;
    default:
      return state;
  }
};