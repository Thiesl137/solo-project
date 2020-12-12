const express = require('express');
const billsController = require('../controllers/billsController');


const router = express.Router();

//POST BILLS TO DATABASE
router.post('/post', billsController.postBill, (req, res) => {
  return res.status(200).json(res.locals.bill);
});

//GET ALL ENTRIES IN DB
router.get('/getAll', billsController.getAllBills, (req, res) => {
  return res.status(200).json(res.locals.bills);
});

//CLEAR ALL BILLS FROM DATABASE
router.delete('/deleteAll', billsController.deleteAllBills, (req, res) => {  
  return res.status(200).json({
    'deletedCount': res.locals.deleteResponse.deletedCount,
    'messageBoard': `Erased All Bills!!! Deleted ${res.locals.deleteResponse.deletedCount} transactions.`
  });
});

module.exports = router;