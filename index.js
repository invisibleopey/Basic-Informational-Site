const path = require('path');
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
