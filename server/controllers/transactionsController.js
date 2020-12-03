const { Transactions } = require('../models/transactionsModels');


const transactionsController = {};

// Transactions.create({ date: new Date(), type: 'test', amount: 500})

transactionsController.createTest = (req, res, next) => {
  // write code here
  
  Transactions.create({ date: new Date(), type: 'test', amount: 500})
    // .exec()
    .then(transactions => {
      console.log('transactions are: ', transactions)
      res.locals.transactions = transactions;
      return next();
    })
    .catch(err => {
      return next({
        log: `transactionsController.test: ERROR: ${err}`,
        message: {
          err: 'Error occurred in transactionsController.test. Check server logs for more details...',
        },
      });
    });
}

module.exports = transactionsController;