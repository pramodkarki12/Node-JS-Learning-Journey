const mongoose = require('mongoose');

/** Connection creation and creating a new db */
mongoose
  .connect('mongodb://localhost:27017/tutdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection Successfull .... '))
  .catch((err) => console.log(err));

/*** Schema => A mongoose schema defines the structure of the document, default values, and validators, etc.
 */

// defining the data types for the different fields
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

/** Mongoose Model =>
    A Mongoose model is a wrapper on the mongoose schema.
    A mongoose schema defines the structure of the document, default values, and validators, etc. whereas, a mongoose model provides an interface to the database for creating, querying, updating and deleting records, etc.
 */

//creating collection
const PlayList = new mongoose.model('PlayList', playListSchema);

/**
    Creating or Inserting
    a Single document
*/
const createDocument = async () => {
  try {
    const nodePlayList = new PlayList({
      name: 'NodeJS',
      ctype: 'BackEnd',
      video: 40,
      author: 'thapaTechnical',
      active: true,
    });
    const result = await nodePlayList.save(); //save the document in the database
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createDocument();

/**
    Creating or Inserting
    a Multiple document
*/
const createMultipleDocument = async () => {
  try {
    const jsPlayList = new PlayList({
      name: 'JavaScript',
      ctype: 'FrontEnd/BackEnd',
      video: 150,
      author: 'thapaTechnical',
      active: true,
    });

    const reactPlayList = new PlayList({
      name: 'ReactJS',
      ctype: 'FrontEnd',
      video: 100,
      author: 'thapaTechnical',
      active: true,
    });

    const mongoosePlayList = new PlayList({
      name: 'Mongoose',
      ctype: 'Database',
      video: 20,
      author: 'thapaTechnical',
      active: true,
    });

    const expressPlayList = new PlayList({
      name: 'ExpressJS',
      ctype: 'BackEnd',
      video: 20,
      author: 'thapaTechnical',
      active: true,
    });

    const graphqlPlayList = new PlayList({
      name: 'GraphQL',
      ctype: 'API',
      video: 40,
      author: 'thapaTechnical',
      active: true,
    });
    const result = await PlayList.insertMany([
      jsPlayList,
      reactPlayList,
      mongoosePlayList,
      expressPlayList,
      graphqlPlayList,
    ]); //save the document in the database
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// createMultipleDocument();

/**
    Read or Query
    a document
*/
const getDocument = async () => {
  try {
    // const result = await PlayList.find();
    const result = await PlayList.find({ ctype: 'BackEnd' })
      .select({ name: 1 })
      .limit(1);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// getDocument();

/**
    Update
    a document
*/
const updateDocument = async (_id) => {
  try {
    // const result = await PlayList.updateOne(
    //   { _id },
    //   { $set: { active: false } }
    // );

    /** Another method */
    // db.COLLECTION_NAME.findByIdAndUpdate(<filer>, <update>, <option>)
    const result = await PlayList.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: 'React JS Tutorial',
          active: true,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// updateDocument('5fbcaed7eed5a734689015ac');

/**
 * Delete the document
 */

const deleteDocument = async (id) => {
  try {
    // const result = await PlayList.deleteOne({ _id: id });

    const result = await PlayList.findByIdAndDelete({ _id: id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

deleteDocument('5fbcaed7eed5a734689015ab');
