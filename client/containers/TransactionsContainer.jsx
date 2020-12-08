import React from 'react';


import Transactions from '../components/Transactions'


function TransactionsContainer(props) {

    return (
      <div className='transactionsContainer'>
        <p>Transactions Container</p>
        <Transactions 
          transactions={props.transactions}
        />
      </div>
    );
  }

export default TransactionsContainer;