import { CHECKBOX_STATE } from '../actions/types';

export default (state = { label: null, checkBoxState: false }, action) => {
  switch(action.type) {
    case CHECKBOX_STATE:
      return { 
        ...state,
        label: action.payload.label, 
        checkBoxState: action.payload.checkboxState 
      };
    default:
      return state;
  }
};