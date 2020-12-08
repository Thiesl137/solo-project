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
      <p>{'name: ' + name}</p>
      <p>{'frequency: ' + frequency}</p>
      <p>{'date: ' + date}</p>
      <p>{'amount: ' + amount}</p>
      <button>DELETE</button>
    </div>
  );
}


export default Transaction;