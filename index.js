const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  // Initiate the target file to error page by default, correct that per req in switch statement
  let targetFile = '404.html';
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/':
      targetFile = 'index.html';
      break;

    case '/about':
      targetFile = 'about.html';
      break;

    case '/contact-me':
      targetFile = 'contact-me.html';
      break;

    default:
      break;
  }

  fs.readFile(path.join(__dirname, targetFile), (err, data) => {
    if (err) throw err;
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log(`Server running at: http://127.0.0.1:8000`);
});
