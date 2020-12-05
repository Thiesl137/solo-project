import React, { Component } from 'react';


class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return ( //propdrill
      <div className='inputs'>
        <p>{this.props.name}</p> 
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input type="number" id="amount" name="amount" />
        </div>
        <div>
          <label htmlFor="frequency">Frequency: </label>
          <select id="frequency" name="frequency">
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="one-time">One-Time</option>
          </select>
        </div>
        <button type="submit" value="submit" >Submit</button>
      </div>
    );
  }
}

export default Inputs;