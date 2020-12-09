import React, { Component } from 'react';

import Inputs from '../components/Inputs'

class TransactionInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='transactionInput'>
        <Inputs 
          updateDatabase={this.props.updateDatabase}
          handleChange={this.props.handleChange}
          incomeInput={this.props.incomeInput}
        />
      </div>
    );
  }
}

export default TransactionInputContainer;