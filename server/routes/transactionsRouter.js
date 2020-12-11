const express = require('express');

const transactionsController = require('../controllers/transactionsController');

const router = express.Router();

//GET ALL ENTRIES IN DB
router.get('/getAllTransactions', transactionsController.getAllTransactions, (req, res) => {
  return res.status(200).json(res.locals.transactions);
});

//POST INCOME TO DATABASE
router.post('/transaction', transactionsController.postTransactions, (req, res) => {
  return res.status(200).json({
    transactions: res.locals.transactions,
    billInfo: res.locals.billInfo
  });
});

router.delete('/clear', transactionsController.eraseAllTransactions, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.transactions.deletedCount,
    'messageBoard': `Erased All Transactions!!! Deleted ${res.locals.transactions.deletedCount} transactions.`
  });
});


module.exports = router;