import React from 'react';
import Transaction from './Transaction'


function TransactionContainer(props) {

  if (!props.transactions) return (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  );

  const transactions = props.transactions;

  if (!transactions) return null;

  console.log("Transactions in Transaction.jsx is: ", props.transactions)

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