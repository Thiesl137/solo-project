const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTERS

//Route to db Routes!
app.use('/api', apiRouter);



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
