const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const transactionsRouter = require('./routes/transactionsRouter');
const billsRouter = require('./routes/billsRouter');

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('NODE_ENV in model = ', process.env.NODE_ENV)

const MONGO_URI = 
      process.env.NODE_ENV === 'production'
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rzepd.azure.mongodb.net/SOLO-PROJECT?retryWrites=true&w=majority`
    : process.env.NODE_ENV === 'development'
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rzepd.azure.mongodb.net/DEVELOPMENT?retryWrites=true&w=majority`
    : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rzepd.azure.mongodb.net/TEST?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.NODE_ENV === 'production' 
          ? "SOLO-PROJECT" 
          : process.env.NODE_ENV === 'development'
          ? "DEVELOPMENT" 
          : "TEST"
})
.then((db)=>console.log(`Connected to Mongo DB`))
.catch(err=>console.log(err));

//ROUTERS

//Route to transactions db
app.use('/api/trans', transactionsRouter);
//Route to bills db
app.use('/api/bills', billsRouter);

//PRODUCTION SERVICE
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
};

//BAD ENDPOINT
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

//GLOBAL ERROR CATCH
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {console.log(`Listening on port ${PORT} NODE_ENV = ${process.env.NODE_ENV}`)}); //listens on port 3000 -> http://localhost:3000/
