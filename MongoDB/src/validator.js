const mongoose = require('mongoose');
const validator = require('validator');

mongoose
  .connect('mongodb://localhost:27017/tutdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connection Successful ... '))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // iit must exists
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [2, 'Minimun 2 letters'],
    maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    enum: ['FrontEnd', 'BackEnd', 'Database'],
  },
  video: {
    type: Number,
    validate(value) {
      // custom validations
      if (value < 0) {
        throw new Error('Videos Count should not be negative.');
      }
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email invalid');
      }
    },
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const PlayList = new mongoose.model('PlayList', playlistSchema);

/** Creating document */
const createDocument = async () => {
  try {
    const ReactPlayList = new PlayList({
      name: 'MaterialUI',
      ctype: 'FrontEnd',
      video: 20,
      author: 'thapaTechnical',
      email: 'thapagmial',
      active: true,
    });

    const result = await PlayList.insertMany([ReactPlayList]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
