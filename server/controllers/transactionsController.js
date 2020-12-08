const model = require('../models/transactionsModels');

let { DateTime } = require('luxon')


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

  model.Transactions.create(testTransaction)
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

  model.Transactions.remove({})
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

transactionsController.getAllTransactions = (req, res, next) => {

  model.Transactions.find({})
    // .exec()
    .then(transactions => {
      // console.log('getAllTransactions is: ', transactions)
      res.locals.transactions = transactions;
      return next();
    })
    .catch(err => {
      return next({
        log: `transactionsController.getAllTransactions: ERROR: ${err}`,
        message: {
          err: 'Error occurred in transactionsController.getAllTransactions. Check server logs for more details...',
        },
      });
    });
}

transactionsController.postIncome = (req, res, next) => {
  
  const today = DateTime.local();

  const {frequency} = req.body;
  let dateMultiplier;
  const reoccurringTransaction = [];

  switch(frequency) {
    case 'weekly': 
      dateMultiplier = 7;
      break;
    case 'bi-weekly':
      dateMultiplier = 14;
      break;
    case 'monthly': //configure this to day of month
      dateMultiplier = 29;
      break;
    case 'default': 
      break;
  }

  const oneTimeTransaction = {
    date: today, 
    type: 'income', 
    name: req.body.name,
    amount: req.body.amount,
    frequency: req.body.frequency
  }

  if (frequency === 'one-time') reoccurringTransaction.push(oneTimeTransaction);
  else {
    for (let i = 0; i < 10; i++){
      reoccurringTransaction.push({
        date: today.plus({days: dateMultiplier*i}), 
        type: 'income', 
        name: req.body.name,
        amount: req.body.amount,
        frequency: req.body.frequency
      })
    }
  }

  model.Transactions.insertMany(reoccurringTransaction)
    .then(income => {
      console.log('transactions are: ', income)
      res.locals.income = income;
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

module.exports = transactionsController;