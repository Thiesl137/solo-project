export const transactionsState = {
    transactions: [],
    transaction: {
      name: 'no name',
      type: 'expense',
      transactionDate: (new Date()).toISOString(),
      amount: 0,
      frequency: 'one-time',
      billId: 0
    }
  };

export const feedbackState = {
    messageBoard: '',
  };

export const billsState = {
  bills: [],
  bill: {},
  billId: 0
}
