const express = require('express');
const app = express();

const path = require('path');

/**
    To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

    The function signature is:

    express.static(root, [options])
 */

const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

// app.get('/', (req, res) => {});

// app.get('/about', (req, res) => {});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact  Page</h1>');
});

app.listen(8000, () => {
  console.log('Listening at port 8000');
});
