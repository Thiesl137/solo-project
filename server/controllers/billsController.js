const { Bills } = require('../models/billsModel');

const billsController = {};

billsController.postBill = (req, res, next) => {
  
  Bills.create(req.body)
    .then(bill => {
      res.locals.bill = bill;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.postBill: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.postBill. Check server logs for more details...',
        },
      });
    });
}

billsController.deleteOneBill = (req, res, next) => {

  Bills.findOneAndDelete({_id: req.body._id})
    // .exec()
    .then(bill => {
      res.locals.bill = bill;
      return next();
    })
    .catch(err => {
      return next({
        log: `billsController.deleteOneBill: ERROR: ${err}`,
        message: {
          err: 'Error occurred in billsController.deleteOneBill. Check server logs for more details...',
        },
      });
    });
}

billsController.deleteAllBills = (req, res, next) => {

  Bills.remove({})
    // .exec()
    .then(deleteResponse => {
      res.locals.deleteResponse = deleteResponse;
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

module.exports = billsController;