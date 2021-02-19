import React from 'react';
import { connect } from 'react-redux';
import { categoryCheckbox } from '../actions/';

const CheckBox = ({ label, checkboxState, categoryCheckbox }) => {
  const onCheckboxChange = (event) => {
    if(event.target.value) {
      categoryCheckbox(label, true);
    } else {
      categoryCheckbox(label, false);
    }
  }

  return (
    <div>
      <input onChange={onCheckboxChange} type="checkbox" id={label} value={!checkboxState.checkBoxState}/>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { checkboxState: state.checkboxState };
};

export default connect(mapStateToProps, { categoryCheckbox })(CheckBox);