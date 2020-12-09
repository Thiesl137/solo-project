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

transactionsController.postTransaction = (req, res, next) => {
  
  const now = DateTime.local();
  const {frequency, type, name, transactionDate, amount} = req.body;
  const reoccurringTransaction = [];
  

  let dateMultiplier;
  let datePlusType;
  let expenseModifier = -1;
  let duration;

  const transactionAmount = (type === 'expense') ? expenseModifier*amount : amount;  

  switch(frequency) {
    case 'weekly': 
      datePlusType   = "weeks";
      duration       = 52;
      dateMultiplier = 1;
      break;
    case 'bi-weekly':
      datePlusType   = "weeks";
      duration       = 26;
      dateMultiplier = 2;
      break;
    case 'monthly': //configure this to day of month
      datePlusType   = "months";
      duration       = 12;
      dateMultiplier = 1;
      break;
    case 'default': 
      break;
  }

  const oneTimeTransaction = {
    userInputDate: now, 
    type, 
    transactionDate,
    name,
    amount: transactionAmount,
    frequency
  }

  if (frequency === 'one-time') reoccurringTransaction.push(oneTimeTransaction);

  else {
    for (let i = 0; i < duration; i++){
      reoccurringTransaction.push({
        userInputDate: now, 
        type,
        transactionDate: DateTime.fromISO(transactionDate).plus({[datePlusType]: dateMultiplier*i}),
        name,
        amount: transactionAmount,
        frequency
      })
    }
  }

  model.Transactions.insertMany(reoccurringTransaction)
    .then(transaction => {
      res.locals.transaction = transaction;
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