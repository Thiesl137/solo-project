import * as types from '../constants/actionTypes';


const initialState = {
  transactions: [],
  incomeInput: {
    name: '',
    amount: 0,
    frequency: 'weekly'
  }
};

const transactionsReducer = (state=initialState, action) => {
  let transactions;
  let name
  let amount;
  let frequency;
  let incomeInput;

  switch(action.type) {
    case types.TEST:
      console.log('state Reducer in TEST ')
      return {
          ...state
        }
    
    case types.GET_ALL_TRANSACTIONS:

      transactions = action.payload;

      return {
        ...state,
        transactions
      }

    case types.POST_INCOME:
      console.log('actions.payload in POST_INCOME is: ', action.payload)
      name      = (action.payload.name) ? action.payload.name : state.incomeInput.name;
      amount    = (action.payload.amount) ? action.payload.amount : state.incomeInput.amount;
      frequency = (action.payload.frequency) ? action.payload.frequency : state.incomeInput.frequency;
      transactions = transactions = state.transactions.slice();

      incomeInput = {
        name,
        amount,
        frequency,
      };

      if(action.payload._id) { //work around. break into action type
        console.log('state', state);
        console.log('transactions', state.transactions);
        transactions.push(action.payload);
      } 
      
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