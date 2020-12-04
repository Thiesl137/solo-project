const express = require('express');

const transactionsController = require('../controllers/transactionsController');

const router = express.Router();

//TEST ENDPOINT
router.get('/test', transactionsController.createTest, (req, res) => {
  return res.status(200).json(res.locals.transactions);
});

router.get('/clear', transactionsController.eraseAllTransactions, (req, res) => {
  //respond with message of number of deleted transactions
  
  console.log('Erased All Transactions!!! Deleted ')
  return res.status(200).json(`Erased All Transactions!!! Deleted ${res.locals.transactions.deletedCount} transactions.`);
});


module.exports = router;