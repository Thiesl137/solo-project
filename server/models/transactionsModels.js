const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Logan:50nY_Yn05@cluster0.rzepd.azure.mongodb.net/SOLO-PROJECT?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'SOLO-PROJECT'
})
.then(()=>console.log('Connected to Mongo DB.'))
.catch(err=>console.log(err));

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  date: Date,
  type: String,
  amount: Number, 
  // homeworld_id: {
  //   // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
  //   type: Schema.Types.ObjectId,
  //   ref: 'planet'
  // }
});

const Transactions = mongoose.model('transactions', transactionSchema);

module.exports = {
  Transactions
}
