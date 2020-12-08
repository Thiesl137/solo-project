import React, { Component } from 'react';

import Inputs from '../components/Inputs'

class IncomeInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='incomeInput'>
        <Inputs 
          name="Income"
          updateDatabase={this.props.updateDatabase}
          handleChange={this.props.handleChange}
          incomeInput={this.props.incomeInput}
        />
      </div>
    );
  }
}

export default IncomeInputContainer;