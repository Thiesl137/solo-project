import React from 'react';


import Transactions from '../components/Transactions'
import DeleteButton from '../components/DeleteButton'


function TransactionsContainer(props) {

    return (
      <div className='transactionsContainer'>
        <p>Transactions Container</p>
        <DeleteButton 
          buttonName={props.buttonName}
          handleClick={props.handleClick}
        />

        <Transactions 
          transactions={props.transactions}
        />

      </div>
    );
  }

export default TransactionsContainer;