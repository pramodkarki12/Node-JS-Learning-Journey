const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/students-api', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((err) => {
    console.log(err);
  });


