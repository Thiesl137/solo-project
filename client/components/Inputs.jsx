import React from 'react';


const Inputs = ({
  postToDatabase,
  handleChange,
  transaction,
  billId
}) =>{
  let today = new Date().toISOString().substr(0, 10);
  console.log('billId in Inputs is: ', billId);
  
  return (
    <form className='inputs'>
      <p>Inputs</p>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="Transactions Input" name="name" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="amount">Amount: </label>
        <input type="number" id="amount" name="amount" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="transactionDate">Transaction Date: </label>
        <input type="date" id="transactionDate" name="transactionDate" defaultValue={today} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="frequency">Frequency: </label>
        <select id="frequency" name="frequency" onChange={handleChange}>
          <option value="one-time">One-Time</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      <div>
        <label htmlFor="type">Type: </label>
        <select id="type" name="type" onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="bill">Bill</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button type="button" value="submit" onClick={(event) => {
        postToDatabase(event, transaction, billId); 
      }}>Submit</button>
    </form>
  );
}


export default Inputs;