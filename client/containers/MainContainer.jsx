import React, { Component } from 'react';
import InputsContainer from './InputsContainer';
import TransactionsContainer from './TransactionsContainer'
import DbsContainer from './DbsContainer'


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div className='mainContainer'>
        <InputsContainer />
        <DbsContainer />
        <TransactionsContainer />
      </div>
    );
  }
}

export default MainContainer;