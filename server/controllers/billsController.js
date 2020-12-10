const { Bills } = require('../models/billsModel');
const { DateTime } = require('luxon')


const billsController = {};

billsController.postBill = (req, res, next) => {

  Bills.create(req.body)
    // .exec()
    .then(bills => {
      res.locals.bills = bills;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.createTest: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.createTest. Check server logs for more details...',
        },
      });
    });
}

billsController.deleteBill = (req, res, next) => {
  // write code here
  
  const testBill = {
    date: new Date(), 
    type: 'bill', 
    name: 'paycheck',
    amount: 500,
    frequency: 'monthly'
  }

  Bills.findOneAndDelete(testBill)
    // .exec()
    .then(bills => {
      res.locals.bills = bills;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.createTest: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.createTest. Check server logs for more details...',
        },
      });
    });
}

billsController.eraseAllBills = (req, res, next) => {
  // write code here

  Bills.remove({})
    // .exec()
    .then(bills => {
      res.locals.bills = bills;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.eraseAllBills: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.eraseAllBills. Check server logs for more details...',
        },
      });
    });
}

billsController.getAllBills = (req, res, next) => {

  Bills.find({})
    // .exec()
    .then(bills => {
      res.locals.bills = bills;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.getAllBills: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.getAllBills. Check server logs for more details...',
        },
      });
    });
}
// billsController.postBills = (req, res, next) => {
  
//   const now = DateTime.local();
//   const {frequency, type, name, transactionDate, amount} = req.body;
//   const reoccurringTransaction = [];
  

//   let dateMultiplier;
//   let datePlusType;
//   let expenseModifier = -1;
//   let duration;

//   const transactionAmount = (type === 'expense' || type === 'bill') ? expenseModifier*amount : amount;  

//   switch(frequency) {
//     case 'weekly': 
//       datePlusType   = "weeks";
//       duration       = 52;
//       dateMultiplier = 1;
//       break;
//     case 'bi-weekly':
//       datePlusType   = "weeks";
//       duration       = 26;
//       dateMultiplier = 2;
//       break;
//     case 'monthly': //configure this to day of month
//       datePlusType   = "months";
//       duration       = 12;
//       dateMultiplier = 1;
//       break;
//     case 'default': 
//       break;
//   }

//   const oneTimeTransaction = {
//     userInputDate: now, 
//     type, 
//     transactionDate,
//     name,
//     amount: transactionAmount,
//     frequency
//   }

//   if (frequency === 'one-time') reoccurringTransaction.push(oneTimeTransaction);

//   else {
//     for (let i = 0; i < duration; i++){
//       reoccurringTransaction.push({
//         ...oneTimeTransaction,
//         transactionDate: DateTime.fromISO(transactionDate).plus({[datePlusType]: dateMultiplier*i}),
//       })
//     }
//   }

//   Transactions.insertMany(reoccurringTransaction)
//     .then(transactions => {
//       if (type === 'bill') {
//         res.locals.billInfo = oneTimeTransaction;
//       };
//       res.locals.transactions = transactions;
//       return next();
//     })
//     .catch(err => {
//       return next({
//         log: `transactionsController.createTest: ERROR: ${err}`,
//         message: {
//           err: 'Error occurred in transactionsController.createTest. Check server logs for more details...',
//         },
//       });
//     });
// }

module.exports = billsController;