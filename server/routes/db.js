const express = require('express');

const transactionsController = require('../controllers/transactionsController');

const router = express.Router();

//TEST ENDPOINT
router.get('/test', transactionsController.createTest, (req, res) => {
  return res.status(200).json(res.locals.transactions);
});

module.exports = router;