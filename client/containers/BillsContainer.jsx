import React, { Component } from 'react';

import Bills from '../components/Bills'

function BillsContainer(props)  {

    return (
      <div className='billsContainer'>
        <h2>Bills</h2>
        {/* <p>CHANGE FROM BILLS TO REOCCURRING</p>
        <p>OR ADD REOCCURRING SEPARATELY</p> */}
        <Bills 
          bills={props.bills}
          handleOneClick={props.handleOneClick}
        />
      </div>
    );
  }


export default BillsContainer;