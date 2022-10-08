// Require Path
// Require fs
// Require http

// create an http server
// Listen to the http server at a particular port

// On request, capure the url of the server
// Initiate a targetPage to index.html
// If others, use switch to set them to the appropriate file
// Now, join the paths with the resulatant variable to look for a file
// Use the fs readfile to read the file
// Use the contnt to res.(end)
// Set the status codes within the switch bodies

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
