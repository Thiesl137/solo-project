import React, { Component } from 'react';



class DbsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }
  
  render() {
    return (
      <div class='dbsContainer'>
        <p>DbsContainer</p>
      </div>
    );
  }
}


export default DbsContainer;