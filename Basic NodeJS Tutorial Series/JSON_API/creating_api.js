const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('<h1>Hello Programmers </h1>');
  } else if (req.url == '/userapi') {
    fs.readFile('json1.json', 'utf-8', (error, data) => {
      //   res.write('<h1>Creating own user api</h1>');
      res.writeHead(200, { 'Content-type': 'application/json' });

      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(`<h1> 404 Page Not Found <\h1>`);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to the port no 8000');
});
