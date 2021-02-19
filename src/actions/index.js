import exchangeRates from '../apis/exchangeRates';
import fakeStore from '../apis/fakeStore';
import  { FETCH_RATES, FETCH_PRODUCTS, SELECTED_RATE, CHECKBOX_STATE } from './types';

export const fetchRates = () => async (dispatch) => {
  const response = await exchangeRates.get('/latest');
  dispatch({ type: FETCH_RATES, payload: response.data });
};

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStore.get('/products');
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const selectedRate = (rate) => {
  return {
    type: SELECTED_RATE,
    payload: rate
  }
};

export const categoryCheckbox = (label, checkboxState) => {
  console.log({ label, checkboxState });
  return {
    type: CHECKBOX_STATE,
    payload: { label, checkboxState }
  }
};