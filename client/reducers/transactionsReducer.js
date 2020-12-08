import * as types from '../constants/actionTypes';
import * as states from './state';

const transactionsReducer = (state=states.transactionsState, action) => {
  let transactions;
  let name
  let amount;
  let frequency;
  let incomeInput;

  console.log('state in reducer is: ', state)

  switch(action.type) {

    case types.TEST:
      console.log('state Reducer in TEST ')
      return {
          ...state
        }
    
    //updates state with all transactions retrieved from MongoDB
    case types.GET_ALL_TRANSACTIONS:

      transactions = action.payload;

      return {
        ...state,
        transactions
      }

    //Updates state with current income transaction to post to MondoDB
    case types.POST_INCOME:
      const transactionToPost = action.payload[0]
      name         = (action.payload.name) ? action.payload.name : state.incomeInput.name;
      amount       = (action.payload.amount) ? action.payload.amount : state.incomeInput.amount;
      frequency    = (action.payload.frequency) ? action.payload.frequency : state.incomeInput.frequency;
      transactions = state.transactions.slice(); //do I nee immer here to clone deep?

      incomeInput = {
        name,
        amount,
        frequency,
      };

      if (action.payload.length === 1) transactions.push(action.payload[0]);
      if (action.payload.length > 1 ) action.payload.forEach(transaction => {
        transactions.push(transaction);
      });

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