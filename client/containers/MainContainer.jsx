import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import InputsContainer from './InputsContainer';
import TransactionsContainer from './TransactionsContainer'


import MessageBoard from '../components/MessageBoard';

const mapStateToProps = state => ({
  transactions: state.transactionsDB.transactions,
  messageBoard: state.feedback.messageBoard 
});

const mapDispatchToProps = dispatch => ({
  getAllTransactions() {
    fetch('/api/trans/getAllTransactions')
      .then(res => res.json())
      .then((transactions) => {
        return dispatch(actions.getAllTransactions(transactions))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: getAllTransactions: ERROR: ', err)
        return undefined;
      })
  },

  deleteAllTransactions() {
    fetch('/api/trans/clear')
      .then(res => res.json())
      .then((deleted) => {
        dispatch(actions.deleteAllTransactions(deleted))
        dispatch(actions.updateMessageBoard(deleted))
        return
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: deletellTransactions: ERROR: ', err)
        return undefined;
      })
  },

  deleteAllBills() {
    fetch('/api/bills/clear')
      .then(res => res.json())
      .then((deleted) => {
        dispatch(actions.deleteAllBills(deleted))
        return
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: deletellTransactions: ERROR: ', err)
        return undefined;
      })
  },

  getAllBills() {
    fetch('/api/bills/getAllBills')
      .then(res => res.json())
      .then((bills) => {
        return dispatch(actions.getAllBills(bills))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: getAllBills: ERROR: ', err)
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
    this.props.getAllBills();
  }

  render() {
    return (
      <div>
        <MessageBoard message={this.props.messageBoard}/>
        <div className='mainContainer'>
          <InputsContainer 
            buttonName="BILLS" 
            handleClick={this.props.deleteAllBills}
          />
          <TransactionsContainer
            buttonName="TRANSACTIONS" 
            handleClick={this.props.deleteAllTransactions}
            transactions={this.props.transactions}
          />
         
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);