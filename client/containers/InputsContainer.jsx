import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseInput from './ExpenseInputContainer';
import IncomeInput from './IncomeInputContainer';
import BillInput from './BillInputContainer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

class InputsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }
  
  render() {
    return (
      <div className='inputsContainer'>
        <p>InputsContainer</p>
        <IncomeInput />
        <hr></hr>
        <ExpenseInput />
        <hr></hr>
        <BillInput />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);