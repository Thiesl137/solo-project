import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asyncActions from '../actions/asyncActions';

import InputsContainer from './InputsContainer';
import TransactionsContainer from './TransactionsContainer'


import MessageBoard from '../components/MessageBoard';

const mapStateToProps = state => ({
  transactions: state.transactionsDB.transactions,
  messageBoard: state.feedback.messageBoard 
});

const mapDispatchToProps = dispatch => ({

  getAllTransactionsAndBills() {
    dispatch(asyncActions.getAllTransactions())
    dispatch(asyncActions.getAllBills())
  },
  
  deleteAllTransactions() {
    dispatch(asyncActions.deleteAllTransactions())
  },

  deleteAllBills() {
    dispatch(asyncActions.deleteAllBills())
      .then((billsDeletedFromDb => {
        console.log('billsDeletedFromDb are: ', billsDeletedFromDb)
        dispatch(asyncActions.deleteAllBillsFromTransactions()) //create a fineManyandDelete with bills from deleted
      }))
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTransactionsAndBills();
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