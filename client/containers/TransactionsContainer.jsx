import React from 'react';


import Transactions from '../components/Transactions'
import DeleteButton from '../components/DeleteButton'


function TransactionsContainer(props) {

    return (
      <div className='transactionsContainer'>
        <h2>Transactions</h2>
        <DeleteButton 
          buttonName={props.buttonName}
          handleAllClick={props.handleAllClick}
        />

        <Transactions 
          transactions={props.transactions}
          handleOneClick={props.handleOneClick}
        />

      </div>
    );
  }

export default TransactionsContainer;