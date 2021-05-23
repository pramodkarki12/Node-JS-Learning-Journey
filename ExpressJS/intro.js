const express = require('express');

const app = express();

/**
 * app.get(route, callback)

    *** API ***
    1. get        - read
    2. post      - create
    3. put       - update
    4. delete  - delete
 */

app.get('/', (req, res) => {
  res.send('Hello Programmer');
});
app.get('/about', (req, res) => {
    res.send("About page. Got it !!! 😄")
})
app.listen(8000, () => {
  console.log('listening the port at 8000');
});

/**
 * The callback function has 2 parameters ie.. , request and response.
 *
 * The request object(req) represents the HTTP requests and has properties for the request query, string, parameters, body, HTTP header, etc.
 *
 * Similarly, the response obect(res) represents the HTTP response that the express app sends when it receives an HTTP request.
 */
