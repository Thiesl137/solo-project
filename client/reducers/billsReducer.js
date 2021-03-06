import * as types from '../constants/actionTypes';
import * as states from './states';
import { DateTime } from 'luxon';


const billsReducer = (state=states.billsState, action) => {
  //scoped variables
  let bills;
  let billId;

  const sortBillsByDate = (bills) => {
    return bills.sort((a, b) => DateTime.fromISO(a.bills).toMillis() - DateTime.fromISO(b.bills).toMillis())
  }
    
  switch(action.type) {

    case types.GET_ALL_BILLS:

      bills = sortBillsByDate(action.payload)

      return {
        ...state,
        bills
      };

    case types.POST_BILL:

      bills = state.bills.slice();

      if (action.payload.type === 'bill') {
        bills.push(action.payload);
        billId = action.payload._id
      };
      return {
        ...state,
        bills,
        billId,
      };

    case types.DELETE_ALL_BILLS:

      bills = [];

      return {
        ...state,
        bills,
      };
   
    case types.DELETE_ONE_BILL:

      bills = state.bills.slice()
        .filter((bill) => !(bill._id === action.payload))

      return {
        ...state,
        bills,
      };

    default:
      return {
        ...state,
      };
  };
}

export default billsReducer;