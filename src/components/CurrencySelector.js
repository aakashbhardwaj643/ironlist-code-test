import React from 'react';
import { connect } from 'react-redux';
import { selectedRate } from '../actions/';

const CurrencySelector = (props) => {
  let currencyOptions;

  if(props.currency.base && props.currency.rates) {
    currencyOptions =  [props.currency.base, ...Object.keys(props.currency.rates)];
  };
  
  const renderOptions = () => {
    if(!currencyOptions) {
      return null;
    }

    return (
      currencyOptions.map((option) => {
        return <option key={option} value={option}>{option}</option>;
      })
    );
  };

  const onSelectChange = (rate) => {
    props.selectedRate(rate);
  };

  return (
    <div>
      <select onChange={(e) => onSelectChange(e.target.value)}>
        {renderOptions()}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currency: state.currencyRates };
}

export default connect(mapStateToProps, { selectedRate })(CurrencySelector);