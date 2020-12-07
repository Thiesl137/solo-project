import React, { Component } from 'react';
import Transaction from '../components/Transaction'


function TransactionContainer(props) {

  if (!props.transactions) return (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  );

  const transactions = props.transactions;

  if (!transactions) return null;

  console.log("Transactions in Transaction.jsx is: ", props.transactions) //Getting HERE, need to figure out how to make asynchronous fetch requests in comonent did mount and/or why it is not pushing through the rerendering cycle to display the components.

  if (!transactions.length) return false;

  const transElems = transactions.map((trans, i) => {
    return (
      <Transaction
        key={i}
        info={trans}
      />
    );
  });

  return (
    <div className='transactions'>
      <p>Transactions</p>
      {transElems}
    </div>
  );
}


export default TransactionContainer;