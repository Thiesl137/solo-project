import React from 'react';


const Transaction = ({
  info
}) => {
  
  const {amount,
    date,
    frequency,
    name,
    type,
    __v,
    _id} = info;

  return (
    <div className='transaction'>
      <p>{'amount: ' + amount}</p>
      <p>{'date: ' + date}</p>
      <button>DELETE</button>
    </div>
  );
}


export default Transaction;