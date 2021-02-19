import React from 'react';
import { connect } from 'react-redux';
import CheckBox from '../CheckBox';

const FilterType = ({ products }) => {
  const renderCheckboxes = () => {
    const categories = [...new Set(products.map(product => product.category))];
    return categories.map(category => <CheckBox key={category} label={category}></CheckBox>);
  };

  return (
    <div>
      {renderCheckboxes()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(FilterType);