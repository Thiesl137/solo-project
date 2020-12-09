import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import TransactionInputContainer from './TransactionInputContainer';



const mapStateToProps = state => ({
  incomeInput: state.database.incomeInput

});

const mapDispatchToProps = dispatch => ({

  //configuring date entered and date transacted

  handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    return dispatch(actions.postTransaction({[name]:value})) 
  },

  updateDatabase(event, state) {
    event.preventDefault();

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
        return dispatch(actions.postTransaction(income))
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
        <TransactionInputContainer 
          updateDatabase={this.props.updateDatabase}
          handleChange={this.props.handleChange}
          incomeInput={this.props.incomeInput}
        />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputsContainer);