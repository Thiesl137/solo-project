import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as actions from '../actions/actions';

import TransactionContainer from './TransactionContainer'

const mapStateToProps = state => ({
  // transactions: state.transactions
});

const mapDispatchToProps = dispatch => ({
  // getAllTransactions() {
  //   fetch('/api/getAllTransactions')
  //   .then(res => res.json())
  //   .then((transactions) => {
  //     console.log('transactions in fetch is ', transactions);
  //     return dispatch(actions.getAllTransactions(transactions))
  //   })
  //   .catch(err => {
  //     console.log('Error in loadFromMongo in store.js: getAllTransactions: ERROR: ', err)
  //     return undefined;
  //   })
  // },
});

function TransactionsContainer(props) {

    return (
      <div className='transactionsContainer'>
        <p>TransactionsContainer</p>
        <TransactionContainer 
          transactions={props.transactions}
        />
      </div>
    );
  }


export default TransactionsContainer;