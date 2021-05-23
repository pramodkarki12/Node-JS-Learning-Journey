const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/olympics', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Database Connected Successfully !!! ');
  })
  .catch((e) => {
    console.log(e);
  });

