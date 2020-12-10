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
        />
      </div>
    );
  }
}

export default ControlsContainer;