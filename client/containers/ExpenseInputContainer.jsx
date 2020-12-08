import React, { Component } from 'react';
import Inputs from '../components/Inputs'

class ExpenseInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='expenseInput'>
        <Inputs name="Expense"/>
      </div>
    );
  }
}

export default ExpenseInputContainer;