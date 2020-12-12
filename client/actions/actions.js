import * as types from '../constants/actionTypes'

export const test = (test) => ({
  type: types.TEST,
  payload: test,
});

export const getAllTransactions = (transactions) => ({
  type: types.GET_ALL_TRANSACTIONS,
  payload: transactions,
});

export const deleteAllTransactions = (numDeleted) => ({
  type: types.DELETE_ALL_TRANSACTIONS,
  payload: numDeleted
});

export const postTransactions = (transactions) => ({
  type: types.POST_TRANSACTIONS,
  payload: transactions
})

export const postBill = (bill) => ({
  type: types.POST_BILL,
  payload: bill
})

export const updateMessageBoard = (message) => ({
  type: types.UPDATE_MESSAGE_BOARD,
  payload: message
});

export const getAllBills = (bills) => ({
  type: types.GET_ALL_BILLS,
  payload: bills,
});

export const deleteAllBills = (numDeleted) => ({
  type: types.DELETE_ALL_BILLS,
  payload: numDeleted,
});
