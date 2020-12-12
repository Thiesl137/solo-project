import React from 'react';
import Bill from './Bill'


function Bills(props) {

  if (!props.bills) return (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  );

  const bills = props.bills;
    
  if (!bills) return null;
  if (!bills.length) return false;

  const billsElems = bills.map((bills, i) => {
    return (
      <Bill
        key={i}
        info={bills}
        handleOneClick={props.handleOneClick}
      />
    );
  });

  return (
    <div className='bills'>
      <p>BILLS HEADER HERE</p>
        {/* <bills Header /> */}
      {billsElems}
    </div>
  );
}


export default Bills;