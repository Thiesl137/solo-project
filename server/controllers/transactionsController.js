const { Transactions } = require('../models/transactionsModels');


const transactionsController = {};

// Transactions.create({ date: new Date(), type: 'test', amount: 500})

transactionsController.createTest = (req, res, next) => {
  // write code here
  
  const testTransaction = {
    date: new Date(), 
    type: 'income', 
    name: 'paycheck',
    amount: 500,
    frequency: 'weekly'
  }

  Transactions.create(testTransaction)
    // .exec()
    .then(transactions => {
      console.log('transactions are: ', transactions)
      res.locals.transactions = transactions;
      return next();
    })
    .catch(err => {
      return next({
        log: `transactionsController.createTest: ERROR: ${err}`,
        message: {
          err: 'Error occurred in transactionsController.createTest. Check server logs for more details...',
        },
      });
    });
}


transactionsController.eraseAllTransactions = (req, res, next) => {
  // write code here

  Transactions.remove({})
    // .exec()
    .then(transactions => {
      console.log('removed is: ', transactions)
      res.locals.transactions = transactions;
      return next();
    })
    .catch(err => {
      return next({
        log: `transactionsController.eraseAllTransactions: ERROR: ${err}`,
        message: {
          err: 'Error occurred in transactionsController.eraseAllTransactions. Check server logs for more details...',
        },
      });
    });
}

module.exports = transactionsController;