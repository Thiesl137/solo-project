import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


import InputsContainer from './InputsContainer';
import TransactionsContainer from './TransactionsContainer'
import DbsContainer from './DbsContainer'

const mapStateToProps = state => ({
  transactions: state.database.transactions
});

const mapDispatchToProps = dispatch => ({
  getAllTransactions() {
    fetch('/api/getAllTransactions')
      .then(res => res.json())
      .then((transactions) => {
        console.log('transactions in fetch is ', transactions);
        return dispatch(actions.getAllTransactions(transactions))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: getAllTransactions: ERROR: ', err)
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);