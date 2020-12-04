import React, { Component } from 'react';



class TransactionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }
  
  render() {
    return (
      <div class='transactionsContainer'>
        <p>TransactionsContainer</p>
      </div>
    );
  }
}


export default TransactionsContainer;