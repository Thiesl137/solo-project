const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userInputDate: Date,         //Date Entered
  transactionDate: Date,      //Date of transaction
  type: String,              //Income or Expense
  name: String,              //name of transaction
  amount: Number,            //dollar amount
  frequency: String,         //weekly, bi-weekly, monthly, one-time
});

const Transactions = mongoose.model('transactions', transactionSchema);

module.exports = {
  Transactions
}
