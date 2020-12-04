import React, { Component } from 'react';
import ExpenseInput from '../components/ExpenseInput';
import IncomeInput from '../components/IncomeInput';
import BillInput from '../components/BillInput';



class InputsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }
  
  render() {
    return (
      <div class='inputsContainer'>
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


export default InputsContainer;