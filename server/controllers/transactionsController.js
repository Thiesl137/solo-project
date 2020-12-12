const { Transactions } = require('../models/transactionsModel');
const { DateTime } = require('luxon')

const transactionsController = {};

transactionsController.deleteAllTransactions = (req, res, next) => {

  Transactions.remove({})
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

transactionsController.deleteAllBillsFromTransactions = (req, res, next) => {

  Transactions.remove({type: 'bill'})

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

transactionsController.deleteBillReoccurancesFromTransactions = (req, res, next) => {

  
  Transactions.deleteMany({billId: req.body._id})

    .then(transactions => {
      
      res.locals.transactions = transactions;

      return next();
    })
    .catch(err => {
      return next({
        log: `transactionsController.deleteBillReoccurancesFromTransactions: ERROR: ${err}`,
        message: {
          err: 'Error occurred in transactionsController.deleteBillReoccurancesFromTransactions. Check server logs for more details...',
        },
      });
    });
}

transactionsController.deleteOneTransaction = (req, res, next) => {

  Transactions.findOneAndDelete({_id: req.body._id})

    .then(transaction => {
      
      res.locals.transaction = transaction;

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

  Transactions.find({})
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

transactionsController.postTransactions = (req, res, next) => {
  
  const now = DateTime.local();
  
  const { frequency, type, name, transactionDate, amount, billId } = req.body.transaction;

  const reoccurringTransaction = [];
  

  let dateMultiplier;
  let reoccuranceFrequency;
  let expenseModifier = -1;
  let duration;

  const transactionAmount = (type === 'expense' || type === 'bill') ? expenseModifier*amount : amount;  

  switch(frequency) {
    case 'weekly': 
      reoccuranceFrequency   = "weeks";
      duration       = 52;
      dateMultiplier = 1;
      break;
    case 'bi-weekly':
      reoccuranceFrequency   = "weeks";
      duration       = 26;
      dateMultiplier = 2;
      break;
    case 'monthly': //configure this to day of month
      reoccuranceFrequency   = "months";
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
    frequency,
    billId
  }

  if (frequency === 'one-time') reoccurringTransaction.push(oneTimeTransaction);

  else {
    for (let i = 0; i < duration; i++){
      reoccurringTransaction.push({
        ...oneTimeTransaction,
        transactionDate: DateTime.fromISO(transactionDate).plus({[reoccuranceFrequency]: dateMultiplier*i}),
      })
    }
  }

  Transactions.insertMany(reoccurringTransaction)
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

module.exports = transactionsController;