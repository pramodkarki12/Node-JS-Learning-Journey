const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Programming World.</h1>');
});

app.get('/about', (req, res) => {
  res.write('<h1>About Page</h1>');
  res.write(
    '<h1>We can write multiple lines of content through res.write()</h1>'
  );
  res.send(); //now close the connection.
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact  Page</h1>');
});

app.get('/temp', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'pramod',
    },
    {
      id: 2,
      name: undefined,
    },
    {
      id: 3,
      name: 'pramod',
    },
  ]);
});

app.get('/same', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'pramod',
    },
    {
      id: 2,
      name: undefined,
    },
    {
      id: 3,
      name: 'pramod',
    },
  ]);
});
/**
 * The method are identical when an object or array is passed,
 * but res.json() will also convert non-objects, such as null and
 * undefined, which are not valid json.
 */

app.listen(8000, () => {
  console.log('Listening at port 8000');
});
