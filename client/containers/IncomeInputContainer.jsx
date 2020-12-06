import React, { Component } from 'react';

import Inputs from '../components/Inputs'

class IncomeInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div className='incomeInput'>
        <Inputs name="Income"/>
      </div>
    );
  }
}

export default IncomeInputContainer;