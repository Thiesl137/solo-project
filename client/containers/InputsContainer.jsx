import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import * as asyncActions from '../actions/asyncActions'

import ControlsContainer from './ControlsContainer';
import BillsContainer from './BillsContainer'
import DeleteButton from '../components/DeleteButton'

const mapStateToProps = state => ({
  transaction: state.transactionsDB.transaction,
  bills: state.billsDB.bills,
  billId: state.billsDB.billId,
});

const mapDispatchToProps = dispatch => ({

  handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    return dispatch(actions.postTransactions({[name]:value})) 
  },

  postToBillThenToTrans(event, transaction) {
    event.preventDefault();

    dispatch(asyncActions.postBill(transaction))
      .then((bill) => {
        dispatch(asyncActions.postTransaction(bill))
      })
  },
});

class InputsContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='inputsContainer'>
        
        <ControlsContainer 
          postToBillThenToTrans={this.props.postToBillThenToTrans}
          handleChange={this.props.handleChange}
          transaction={this.props.transaction}
        />

        <BillsContainer 
          bills={this.props.bills}
        /> 

        <DeleteButton 
          buttonName={this.props.buttonName}
          handleClick={this.props.handleClick}
          billId={this.props.billId}
        />

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);