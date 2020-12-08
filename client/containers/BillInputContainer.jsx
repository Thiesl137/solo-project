import React, { Component } from 'react';
import Inputs from '../components/Inputs'

class BillInputContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='billInputContainer'>
        <Inputs name="Bill"/>
      </div>
    );
  }
}

export default BillInputContainer;