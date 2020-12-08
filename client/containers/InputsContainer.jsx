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

    return dispatch(actions.postIncomeToDatabase({[name]:value}))

    
  },

  updateDatabase(event) {
    event.preventDefault();
    console.log('In postIncomeToDatabase')
    
    return dispatch(actions.postIncomeToDatabase())
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