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
  
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  // let transactionDateToString = DateTime.fromISO(transactionDate.substr(0, 10)).toLocaleString();
  let dayNum = DateTime.fromISO(transactionDate.substr(0, 10)).day;
    
  dayNum = `${dayNum}` + nth(dayNum)

  return (
    <div className='bill'>
      <p>{dayNum}</p>
      <p>{name}</p>
      <p>{frequency}</p>
      <p>{'$ ' + amount}</p>
      <button onClick={() => handleOneClick(_id)}>DELETE</button>
    </div>
  );
}


export default Bill;