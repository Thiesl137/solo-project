import React from 'react';
const { DateTime } = require('luxon');

const Transaction = ({
  info,
  handleOneClick
}) => {

  const {amount,
    transactionDate,
    frequency,
    name,
    type,
    __v,
    _id,
    balance} = info;
  

  let mon = DateTime.fromISO(transactionDate.substr(0, 10)).toLocaleString({ month: 'short' });
  let dayNum = DateTime.fromISO(transactionDate.substr(0, 10)).toLocaleString({ day: '2-digit' });
  
  return (
    <div className='transaction'>
      <p className='date'>{mon}</p>
      <p className='date'>{dayNum}</p>
      <p>{name}</p>
      <p>{type}</p>
      <p>{frequency}</p>
      <p>{'$ ' + amount}</p>
      <p>{'$ ' + balance}</p>
      <button onClick={() => handleOneClick(_id)}>DELETE</button>
    </div>
  );
}


export default Transaction;