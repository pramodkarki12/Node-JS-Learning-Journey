const express = require('express');

require('./db/conn');
const studentRouter = require('./routers/student');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

/**use the router  */
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Connection Established at ${port} `);
});


/***
 * You DO NOT NEED express.json() and express.urlencoded() for GET or DELETE requests. We only need it for the post and put request.
 *
 * express.json() is a method inbuilt in express to recognize the incoming request object as a JSON object. This method is called as a middleware in your application using the code: app.use(express.json())
 */

/** */
