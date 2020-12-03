const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});}

app.listen(3000, () => {console.log('Listening on port 3000')}); //listens on port 3000 -> http://localhost:3000/
