import React, { Component } from 'react';

import Inputs from '../components/Inputs'

class ControlsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='controlsContainer'>
        <h2>Controls</h2>
        <Inputs 
          postToBillThenToTrans={this.props.postToBillThenToTrans}
          handleChange={this.props.handleChange}
          transaction={this.props.transaction}
        />
      </div>
    );
  }
}

export default ControlsContainer;