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

export const postIncome = (income) => ({
  type: types.POST_INCOME,
  payload: income
})
