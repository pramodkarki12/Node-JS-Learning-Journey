const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/userRegistration', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Database Connected !!');
  })
  .catch((err) => {
    console.log(err);
  });
