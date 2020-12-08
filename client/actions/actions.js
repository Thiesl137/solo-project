import * as types from '../constants/actionTypes'

export const test = (test) => ({
  type: types.TEST,
  payload: test,
});

export const getAllTransactions = (transactions) => ({
  type: types.GET_ALL_TRANSACTIONS,
  payload: transactions,
});

export const postIncomeToDatabase = (income) => ({
  type: types.POST_INCOME,
  payload: income
})
