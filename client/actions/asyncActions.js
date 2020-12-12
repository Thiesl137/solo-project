import * as types from '../constants/actionTypes'
import * as actions from './actions'

// export const someThenableThunk = someData => (dispatch, getState) => Promise.resolve().then(() => {
//   const { someReducer } = getState();
//   return dispatch({
//     type: actionTypes.SOME_ACTION_TYPE,
//     someData,
//   });
// });

export function postTransaction(transaction) {

  return function(dispatch, getState) {

    if (transaction.type === 'bill') transaction.billId = getState().billsDB.billId;

    return fetch('/api/trans/post',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({transaction})
      })
      .then(res => res.json())
      .then((transactions) => {
        dispatch(actions.postTransactions(transactions));
      })
      .catch(err => {
        return null
      });
  };
}

export function postBill(transaction) {

  return function(dispatch) {
    
    return fetch('/api/bills/post',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      })
      .then(res => res.json())
      .then((bill) => {
        dispatch(actions.postBill(bill));
        return bill; 
      })
      .catch(err => {
        console.log('Error in fetch in asyncActions.js: postBill: ERROR: ', err)
        return null;
      });
  };
}

export function getAllTransactions() {
  return function (dispatch) {

    return fetch('/api/trans/getAll')
        .then(res => res.json())
        .then((transactions) => {
          dispatch(actions.getAllTransactions(transactions))
        })
        .catch(err => {
          console.log('Error in fetch in asyncActions.js: getAllTransactions: ERROR: ', err)
          return undefined;
        })
  }
}

export function deleteAllTransactions() {
  return function (dispatch)  {
    return fetch('/api/trans/deleteAll', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then((deleted) => {
        dispatch(actions.deleteAllTransactions(deleted))
        dispatch(actions.updateMessageBoard(deleted))
      })
      .catch(err => {
        console.log('Error in fetch in asyncActions.js: deleteAllTransactions: ERROR: ', err)
        return undefined;
      })
  }
}

export function deleteAllBillsFromTransactions() {
  return function (dispatch)  {
    return fetch('/api/trans/deleteAllBills', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then((deleted) => {
        dispatch(actions.deleteAllBillsFromTransactions(deleted))
        dispatch(actions.updateMessageBoard(deleted))
      })
      .catch(err => {
        console.log('Error in fetch in asyncActions.js: deleteAllBillsFromTransactions: ERROR: ', err)
        return undefined;
      })
  }
}

export function getAllBills() {
  return function (dispatch)  {
    return fetch('/api/bills/getAll')
      .then(res => res.json())
      .then((bills) => {
        dispatch(actions.getAllBills(bills))
      })
      .catch(err => {
        console.log('Error in fetch in asyncActions.js: getAllBills: ERROR: ', err)
        return undefined;
      })
  }
}

export function deleteAllBills() {
  return function (dispatch, getState)  {

    const billsInState = getState().billsDB.bills
    console.log('billsInState in fetch in asyncActions.js: ', billsInState)

    return fetch('/api/bills/deleteAll', {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then((deleted) => {
        
        dispatch(actions.deleteAllBills(deleted))
        return billsInState
      })
      .catch(err => {
        console.log('Error in fetch in asyncActions.js: deleteAllBills: ERROR: ', err)
        return undefined;
      })
  }
}
