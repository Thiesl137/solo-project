import React, { Component } from 'react';

import Inputs from '../components/Inputs'

class ControlsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='controlsContainer'>
        <p>ControlsContainer</p>
        <Inputs 
          postToDatabase={this.props.postToDatabase}
          handleChange={this.props.handleChange}
          transaction={this.props.transaction}
          billId={this.props.billId}
        />
      </div>
    );
  }
}

export default ControlsContainer;