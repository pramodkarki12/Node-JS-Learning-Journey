const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/tutdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection Successfull .... '))
  .catch((err) => console.log(err));

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const PlayList = new mongoose.model('PlayList', playListSchema);

/** Count the document */
const countDocumentPlayList = async () => {
  try {
    const result = await PlayList.find({ author: 'thapaTechnical' })
      .select({ name: 1 })
      .countDocuments();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// countDocumentPlayList();

/** Sorting */
const sortDocumentPlayList = async () => {
  try {
    const result = await PlayList.find({ author: 'thapaTechnical' })
      .select({ name: 1 })
      .sort({ name: -1 }); // 1 denotes the ascending order and -1 denotes the  decending order
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
sortDocumentPlayList();
