import React, { Component } from 'react';
import Inputs from './Inputs'

class BillInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div class='billInput'>
        <Inputs name="Bill"/>
      </div>
    );
  }
}

export default BillInput;