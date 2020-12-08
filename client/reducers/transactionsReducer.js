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

  switch(action.type) {
    case types.TEST:
      console.log('state Reducer in TEST ')
      return {
          ...state
        }
    
    case types.GET_ALL_TRANSACTIONS:

      const transactions = action.payload;

      return {
        ...state,
        transactions
      }

    case types.POST_INCOME:
      console.log('actions.payload in POST_INCOME is: ', action.payload)
      const name   = (action.payload.name) ? action.payload.name : state.incomeInput.name;
      const amount = (action.payload.amount) ? action.payload.amount : state.incomeInput.amount;
      const frequency = (action.payload.frequency) ? action.payload.frequency : state.incomeInput.frequency;
      const incomeInput = {
        name,
        amount,
        frequency,
      };
      
      console.log(incomeInput)
      console.log(state)
      return {
        ...state,
        incomeInput
      }

    default:
      return state;
  };
}

export default transactionsReducer;