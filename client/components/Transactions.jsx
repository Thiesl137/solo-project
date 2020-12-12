import React from 'react';
import Transaction from './Transaction'


function Transactions(props) {

  if (!props.transactions) return (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  );

  const transactions = props.transactions;
    
  if (!transactions) return null;
  if (!transactions.length) return false;

  const transElems = transactions.map((trans, i) => {
    return (
      <Transaction
        key={i}
        info={trans}
        handleOneClick={props.handleOneClick}
      />
    );
  });

  return (
    <div className='transactions'>
      <div className='transaction'>
        <p className='date'>MON</p>
        <p className='date'>DAY</p>
        <p>NAME</p>
        <p>TYPE</p>
        <p>FREQUENCY</p>
        <p>AMOUNT</p>
        <p>BALANCE</p>
        <button onClick={() => console.log('hello')}>DELETE</button>
      </div>
      {/* <p>TRANSACTIONS HEADER HERE</p> */}
        {/* <TransactionsHeader /> */}
      {transElems}
    </div>
  );
}


export default Transactions;