import React, { Component } from 'react';
import Inputs from './Inputs'

class IncomeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div class='incomeInput'>
        <Inputs name="Income"/>
      </div>
    );
  }
}

export default IncomeInput;