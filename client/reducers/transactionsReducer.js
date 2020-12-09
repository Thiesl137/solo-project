import * as types from '../constants/actionTypes';
import * as states from './state';
const { DateTime } = require("luxon")

const transactionsReducer = (state=states.transactionsState, action) => {
  let transactions;
  let transactionDate;
  let name;
  let type;
  let amount;
  let frequency;
  let incomeInput;
  let messageBoard;

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
      //update incomeInput.transaction date (reset). It's persisting seconds.
      
      messageBoard = action.payload.messageBoard;
      return {
        ...state,
        transactions,
    
      }

    //Updates state with current income transaction to post to MondoDB
    case types.POST_TRANSACTION:
      console.log(action.payload)
      name              = (action.payload.name)            ? action.payload.name            : state.incomeInput.name;
      transactionDate   = (action.payload.transactionDate) ? action.payload.transactionDate : state.incomeInput.transactionDate;
      type              = (action.payload.type)            ? action.payload.type            : state.incomeInput.type;
      amount            = (action.payload.amount)          ? action.payload.amount          : state.incomeInput.amount;
      frequency         = (action.payload.frequency)       ? action.payload.frequency       : state.incomeInput.frequency;
      transactions      = state.transactions.slice(); //do I nee immer here to clone deep?

      incomeInput = {
        name,
        type,
        transactionDate,
        amount,
        frequency,
      };

      if (action.payload.length === 1) transactions.push(action.payload[0]);
      if (action.payload.length > 1 ) action.payload.forEach(transaction => {
        transactions.push(transaction);
      });

      transactions = sortTransactionsByDate(transactions);

      return {
        ...state,
        transactions,
        incomeInput
      }

    default:
      return state;
  };
}

export default transactionsReducer;