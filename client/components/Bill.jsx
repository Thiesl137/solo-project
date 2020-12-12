import React from 'react';
const { DateTime } = require('luxon');

const Bill = ({
  info,
  handleOneClick
}) => {
  
  const {amount,
    transactionDate,
    frequency,
    name,
    type,
    __v,
    _id} = info;
  
  let transactionDateToString = DateTime.fromISO(transactionDate).toLocaleString();
    
  return (
    <div className='transaction'>
      <p>{'transactionDate: ' + transactionDateToString}</p>
      <p>{'name: ' + name}</p>
      <p>{'type: ' + type}</p>
      <p>{'frequency: ' + frequency}</p>
      <p>{'amount: ' + amount}</p>
      <button onClick={() => handleOneClick(_id)}>DELETE</button>
    </div>
  );
}


export default Bill;