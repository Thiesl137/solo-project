import * as types from '../constants/actionTypes';


const initialState = {
  transactions: [],
};

const transactionsReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.TEST:
      console.log('state Reducer in TEST ')
      return {
          ...state
        }
    
    case types.GET_ALL_TRANSACTIONS:
      console.log('actions.payload is: ', action.payload)
      const transactions = action.payload;

      return {
        ...state,
        transactions,
      }
    default:
      return state;
  };
}

export default transactionsReducer;