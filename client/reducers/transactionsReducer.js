import * as types from '../constants/actionTypes';
import * as states from './states';
const { DateTime } = require("luxon")

const transactionsReducer = (state=states.transactionsState, action) => {
  let transactions;
  let transactionDate;
  let name;
  let type;
  let amount;
  let frequency;
  let transaction;
  let messageBoard;
  let billId;


  const sortTransactionsByDate = (transactions) => {
    return transactions.sort((a, b) => DateTime.fromISO(a.transactionDate).toMillis() - DateTime.fromISO(b.transactionDate).toMillis())
  }

  switch(action.type) {

    //updates state with all transactions retrieved from MongoDB
    
    case types.GET_ALL_TRANSACTIONS:

      transactions = sortTransactionsByDate(action.payload);

      return {
        ...state,
        transactions
      }
      
    case types.DELETE_ALL_TRANSACTIONS:

      transactions = [];
      //update transaction.transaction date (reset). It's persisting seconds.

      return {
        ...state,
        transactions,
    
      }

    case types.DELETE_ALL_BILLS_FROM_TRANSACTIONS:

      transactions = state.transactions.slice();
      //update transaction.transaction date (reset). It's persisting seconds.
      transactions = transactions.filter(transaction => !(transaction.type === 'bill'))
      console.log('transactions in DELETE_ALL_BILLS_FROM_TRANSACTIONS is: ', transactions)
      return {
        ...state,
        transactions,
    
      }

    //Updates state with current income transaction to post to MondoDB
    case types.POST_TRANSACTIONS:
      const transactionsPayload = (action.payload.transactions) ? action.payload.transactions: [];
      
      //needed for forms not resetting to a defaultValue
      name              = (action.payload.name)            ? action.payload.name            : state.transaction.name;
      transactionDate   = (action.payload.transactionDate) ? action.payload.transactionDate : state.transaction.transactionDate;
      type              = (action.payload.type)            ? action.payload.type            : state.transaction.type;
      amount            = (action.payload.amount)          ? action.payload.amount          : state.transaction.amount;
      frequency         = (action.payload.frequency)       ? action.payload.frequency       : state.transaction.frequency;

      billId            = states.billsState.billId;

      transactions      = state.transactions.slice(); //do I nee immer here to clone deep?
      

      transaction = {
        name,
        type,
        transactionDate,
        amount,
        frequency,
        billId
      };

      if (transactionsPayload.length === 1) transactions.push(transactionsPayload[0]);
      if (transactionsPayload.length > 1 ) transactionsPayload.forEach(transaction => {
        transactions.push(transaction);
      });

      transactions = sortTransactionsByDate(transactions);
      

      return {
        ...state,
        transactions,
        transaction,
      }

    default:
      return state;
  };
}

export default transactionsReducer;