import React from 'react';
import { connect } from 'react-redux';

const ProductItem = ({ products, selectedCurrency, rates }) => {
  const renderProducts = () => {
    if(!products) {
      return null;
    }

    const renderPrice = (price) => {
      if(!rates.rates[selectedCurrency]) {
        return price;
      }
      return price * rates.rates[selectedCurrency];
    }
    
    return (
      products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title}/>
          <h3>{product.title}</h3>
          <small>{product.category}</small>
          <p>{product.description}</p>
          <h4>{`${renderPrice(product.price)} ${!selectedCurrency ? rates.base : selectedCurrency}`}</h4>
        </div>
      ))
    );
  }

  return (
    <div>
      {renderProducts()}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products, selectedCurrency: state.selectedRate, rates: state.currencyRates};
}

export default connect(mapStateToProps)(ProductItem);