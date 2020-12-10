const express = require('express');
const billsController = require('../controllers/billsController');
const router = express.Router();

//POST BILLS TO DATABASE
router.post('/post', billsController.postBill, (req, res) => {
  return res.status(200).json(res.locals.bills);
});

//GET ALL ENTRIES IN DB
router.get('/getAllBills', billsController.getAllBills, (req, res) => {
  return res.status(200).json(res.locals.bills);
});

//CLEAR ALL BILLS FROM DATABASE
router.get('/clear', billsController.eraseAllBills, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.bills.deletedCount,
    'messageBoard': `Erased All Bills!!! Deleted ${res.locals.bills.deletedCount} transactions.`
  });
});


module.exports = router;