import React from 'react';


import Transactions from '../components/Transactions'
import DeleteButton from '../components/DeleteButton'


function TransactionsContainer(props) {

    return (
      <div className='transactionsContainer'>
        <p>Transactions Container</p>
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