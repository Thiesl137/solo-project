

export const transactionsState = {
    transactions: [],
    incomeInput: {
      name: 'no name',
      type: 'expense',
      transactionDate: (new Date()).toISOString(),
      amount: 0,
      frequency: 'one-time'
    }
  };

export const feedbackState = {
    messageBoard: '',
  };