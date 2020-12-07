import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import InputsContainer from './InputsContainer';
import TransactionsContainer from './TransactionsContainer'
import DbsContainer from './DbsContainer'
import DeleteButton from '../components/DeleteButton'

const mapStateToProps = state => ({
  transactions: state.database.transactions,
  messageBoard: state.feedback.messageBoard 
});

const mapDispatchToProps = dispatch => ({
  getAllTransactions() {
    fetch('/api/getAllTransactions')
      .then(res => res.json())
      .then((transactions) => {
        console.log('transactions in getAllTransactions is ', transactions);
        return dispatch(actions.getAllTransactions(transactions))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: getAllTransactions: ERROR: ', err)
        return undefined;
      })
  },

  deleteAllTransactions() {
    fetch('/api/clear')
      .then(res => res.json())
      .then((numDeleted) => {
        console.log('numDeleted in DeleteAllTransactions is ', numDeleted);
        return dispatch(actions.deleteAllTransactions(numDeleted))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: deletellTransactions: ERROR: ', err)
        return undefined;
      })
  },

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTransactions();
  }

  render() {
    return (
      <div className='mainContainer'>
        <InputsContainer />
        <DbsContainer />
        <TransactionsContainer
          transactions={this.props.transactions}
        />
        <DeleteButton 
          flag="ALL" 
          handleClick={this.props.deleteAllTransactions}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);