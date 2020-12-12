const express = require('express');
const transactionsController = require('../controllers/transactionsController');
const router = express.Router();

//POST INCOME TO DATABASE
router.post('/post', transactionsController.postTransactions, (req, res) => {
  return res.status(200).json({
    transactions: res.locals.transactions,
    billInfo: res.locals.billInfo
  });
});

//GET ALL ENTRIES IN DB
router.get('/getAll', transactionsController.getAllTransactions, (req, res) => {
  return res.status(200).json(res.locals.transactions);
});

router.delete('/deleteAll', transactionsController.deleteAllTransactions, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.transactions.deletedCount,
    'messageBoard': `Erased All Transactions!!! Deleted ${res.locals.transactions.deletedCount} transactions.`
  });
});

router.delete('/deleteOne', transactionsController.deleteOneTransaction, (req, res) => {  
  return res.status(200).json({
    'transaction': res.locals.transaction,
  });
});

router.delete('/deleteAllBills', transactionsController.deleteAllBillsFromTransactions, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.transactions.deletedCount,
    'messageBoard': `Erased All Bills!!! Deleted ${res.locals.transactions.deletedCount} Bills.`
  });
});

router.delete('/deleteBillReoccurances', transactionsController.deleteBillReoccurancesFromTransactions, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.transactions.deletedCount,
  });
});

module.exports = router;