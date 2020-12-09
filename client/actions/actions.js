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

export const postTransaction = (transaction) => ({
  type: types.POST_TRANSACTION,
  payload: transaction
})


export const updateMessageBoard = (message) => ({
  type: types.UPDATE_MESSAGE_BOARD,
  payload: message
});