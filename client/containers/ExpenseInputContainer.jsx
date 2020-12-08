import React, { Component } from 'react';
import Inputs from '../components/Inputs'

class ExpenseInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='expenseInputContainer'>
        <Inputs name="Expense"/>
      </div>
    );
  }
}

export default ExpenseInputContainer;