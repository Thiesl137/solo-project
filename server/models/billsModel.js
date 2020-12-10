const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billSchema = new Schema({
  userInputDate: Date,         //Date Entered
  transactionDate: Date,      //Date of transaction
  type: String,              //Income or Expense
  name: String,              //name of transaction
  amount: Number,            //dollar amount
  frequency: String,         //weekly, bi-weekly, monthly, one-time
});

const Bills = mongoose.model('bills', billSchema);

module.exports = {
    Bills
}