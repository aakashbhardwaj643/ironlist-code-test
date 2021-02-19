import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Filters from './filters/Filters';
import ProductList from './products/ProductList';
import { fetchRates, fetchProducts } from '../actions/index';

const App = (props) => {
  useEffect(() => {
    props.fetchProducts();
    props.fetchRates();
  }, []);

  return (
    <div>
      <Header/>
      <Filters/>
      <ProductList/>
    </div>
  );
};

export default connect(null, { fetchProducts, fetchRates })(App);