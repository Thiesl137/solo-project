import React, { Component } from 'react';

import Bills from '../components/Bills'

function BillsContainer(props)  {

    return (
      <div className='billsContainer'>
        <p>BillsContainer</p>
        <p>BILLS TO DISPLAY with functionality</p>
        <Bills 
          bills={props.bills}
          handleOneClick={props.handleOneClick}
        />
      </div>
    );
  }


export default BillsContainer;