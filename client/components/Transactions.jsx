import React, { Component } from 'react';
import Transaction from './Transaction'


class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    }
  }
  
  componentDidMount() {
    fetch('/api/getAllTransactions')
      .then(res => res.json())
      .then((transactions) => {
        console.log('transactions in fetch is ', transactions);
        return this.setState({
          transactions,
        });
      })
      .catch(err => console.log('Transactions.componentDidMount: get characters: ERROR: ', err));
  }
  
  render() {
    if (!this.state.transactions) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { transactions } = this.state;

    if (!transactions) return null;

    if (!transactions.length) return (
      <div>Sorry, no transactions found</div>
    );

    const transElems = transactions.map((trans, i) => {
      return (
        <Transaction
          key={i}
          info={trans}
        />
      );
    });

    return (
      <div className='transactions'>
        <p>Transactions</p>
        {transElems}
      </div>
    );
  }
}


export default Transactions;