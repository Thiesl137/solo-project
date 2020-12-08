import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import ExpenseInput from './ExpenseInputContainer';
import IncomeInput from './IncomeInputContainer';
import BillInput from './BillInputContainer';


const mapStateToProps = state => ({
  incomeInput: state.database.incomeInput

});

const mapDispatchToProps = dispatch => ({

  handleChange(event) {
    console.log(`event.taget.name in handleChange is ${event.target.name}
     event.target.value in handleChange is ${event.target.value}`)
    const name = event.target.name;
    const value = event.target.value;

    return dispatch(actions.postIncome({[name]:value})) 
  },

  updateDatabase(event, state) {
    event.preventDefault();
    console.log('state In updateDatabase: ', state)
    console.log('event In updateDatabase: ', event)
  
    fetch('/api/income',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      .then(res => res.json())
      .then((income) => {
        console.log('transactions in post is ', income);
        return dispatch(actions.postIncome(income))
      })
      .catch(err => {
        console.log('Error in loadFromMongo in mainContainer.js: getAllTransactions: ERROR: ', err)
        return undefined;
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
        <p>InputsContainer</p>
        <IncomeInput 
          updateDatabase={this.props.updateDatabase}
          handleChange={this.props.handleChange}
          incomeInput={this.props.incomeInput}
        />
        <hr></hr>
        <ExpenseInput />
        <hr></hr>
        <BillInput />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);