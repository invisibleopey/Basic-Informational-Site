const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
