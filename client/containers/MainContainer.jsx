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
      .then(() => {
        dispatch(asyncActions.deleteAllBillsFromTransactions())
      })
  },

  deleteOneTransaction(_id) {
    dispatch(asyncActions.deleteOneTransaction(_id))
  },

  deleteOneBill(_id) {
    dispatch(asyncActions.deleteOneBill(_id))
      .then(() => {
        dispatch(asyncActions.deleteBillReoccurancesFromTransactions(_id))
      })
  }
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
            handleAllClick={this.props.deleteAllBills}
            handleOneClick={this.props.deleteOneBill}
          />
          <TransactionsContainer
            buttonName="TRANSACTIONS" 
            handleAllClick={this.props.deleteAllTransactions}
            handleOneClick={this.props.deleteOneTransaction}
            transactions={this.props.transactions}
          />
         
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);