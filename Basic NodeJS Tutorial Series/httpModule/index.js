/**
 * The http.CreateServer() methods inclues the request and response parameters which is supplied by the Nodejs.
 *
 * The request object can be used to get the information about the current HTTP request. E.g.., url, request, header and data
 *
 * The response object can be used to send a response for a current HTTP
 */

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Hello from the others sides');
  } else if (req.url == '/about') {
    res.end(`<h1>About Page </h1>`);
  } else if (req.url == '/contact') {
    res.end(`<h1>Contact Page </h1>`);
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(`<h1> 404 Page Not Found <\h1>`);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to the port no 8000');
});
