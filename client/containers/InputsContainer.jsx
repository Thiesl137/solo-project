import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import ControlsContainer from './ControlsContainer';
import BillsContainer from './BillsContainer'
import DeleteButton from '../components/DeleteButton'

const mapStateToProps = state => ({
  transaction: state.transactionsDB.transaction,
  bills: state.billsDB.bills
});

const mapDispatchToProps = dispatch => ({

  handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    return dispatch(actions.postTransactions({[name]:value})) 
  },

  postToDatabase(event, state) {
    event.preventDefault();

    fetch('/api/trans/transaction',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      .then(res => res.json())
      .then((transactions) => {
        dispatch(actions.postTransactions(transactions))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: PostTransactions: ERROR: ', err)
        return undefined;
      });


    fetch('/api/bills/post',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      .then(res => res.json())
      .then((bill) => {
        console.log('bill in POST TO BILLS is: ', bill)
        dispatch(actions.postBill(bill))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: postBill: ERROR: ', err)
        return undefined;
      });
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
          postToDatabase={this.props.postToDatabase}
          handleChange={this.props.handleChange}
          transaction={this.props.transaction}
        />

        <BillsContainer 
          bills={this.props.bills}
        /> 

        <DeleteButton 
          buttonName={this.props.buttonName}
          handleClick={this.props.handleClick}
        />

        
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);