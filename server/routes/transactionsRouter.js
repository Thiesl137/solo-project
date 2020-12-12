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

module.exports = router;