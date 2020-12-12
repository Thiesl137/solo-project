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
    _id} = info;
  
  let transactionDateToString = DateTime.fromISO(transactionDate).toLocaleString();
    
  return (
    <div className='bill'>
      <p>{transactionDateToString}</p>
      <p>{name}</p>
      <p>{frequency}</p>
      <p>{'$' + amount}</p>
      <button onClick={() => handleOneClick(_id)}>DELETE</button>
    </div>
  );
}


export default Bill;