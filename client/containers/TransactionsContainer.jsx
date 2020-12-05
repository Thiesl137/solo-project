import React, { Component } from 'react';
import Transactions from '../components/Transactions'

const mapStateToProps = state => {

}

const mapDispatchtoProps = dispatch => {

}

class TransactionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div className='transactionsContainer'>
        <p>TransactionsContainer</p>
        <Transactions />
      </div>
    );
  }
}


export default TransactionsContainer;