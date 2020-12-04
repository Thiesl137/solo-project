const mongoose = require('mongoose');
require('dotenv').config();

console.log('NODE_ENV in model = ', process.env.NODE_ENV)

const MONGO_URI = 
  process.env.NODE_ENV === 'production'
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rzepd.azure.mongodb.net/SOLO-PROJECT?retryWrites=true&w=majority`
    : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rzepd.azure.mongodb.net/DEVELOPMENT?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.NODE_ENV === 'production' ? "SOLO-PROJECT" : "DEVELOPMENT" 
})
.then((db)=>console.log(`Connected to Mongo DB`))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: Date,         //date of transaction
  type: String,       //Income or Expense
  name: String,       //name of transaction
  amount: Number,     //dollar amount
  frequency: String,  //weekly, bi-weekly, monthly, one-time

  // homeworld_id: {
  //   // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
  //   type: Schema.Types.ObjectId,
  //   ref: 'planet'
  // }
});

const Transactions = mongoose.model('transactions', transactionSchema);

module.exports = {
  Transactions,

}
