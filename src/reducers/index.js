import { combineReducers } from 'redux';
import products from './productReducer';
import currencyRates from './rateReducer'; 
import selectedRate from './selectedRateReducer';
import checkboxState from './checkboxStateReducer';

export default combineReducers({
  products,
  currencyRates,
  selectedRate,
  checkboxState
});