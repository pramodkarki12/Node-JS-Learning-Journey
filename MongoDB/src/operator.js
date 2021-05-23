/** Comparison Query Operators


Name	Description

$eq	     =>  Matches values that are equal to a specified value.
$gt	     =>  Matches values that are greater than a specified value.
$gte	=>  Matches values that are greater than or equal to a specified value.
$in	     =>  Matches any of the values specified in an array.
$lt	      =>  Matches values that are less than a specified value.
$lte	 =>  Matches values that are less than or equal to a specified value.
$ne	    =>  Matches all values that are not equal to a specified value.
$nin	=>  Matches none of the values specified in an array.


*/

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

/**
    Read or Query
    a document
*/
const getDocumentThroughComparisionOperator = async () => {
  try {
    //1. find video equals to 20
    // const result = await PlayList.find({ video: {$eq: 20} }).select({ name: 1 });

    //2. find video greater than 20
    // const result = await PlayList.find({ video: {$gt: 20} }).select({ name: 1 });

    //3.  find the name of the document that has ctype:'Backend' and 'API' which is specified in an array.
    // const result = await PlayList.find({ ctype: { $in: ['BackEnd', 'API'] } }).select({
    //   name: 1,
    // });

    // 4. find the name of the document except the ctype:'Backend' and 'API' which is specified in an array.
    const result = await PlayList.find({
      ctype: { $nin: ['BackEnd', 'API'] },
    }).select({
      name: 1,
    });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// getDocumentThroughLogicalOperator();

/** Logical Query Operators

Name	Description
$and   => 	Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.

$not   => 	Inverts the effect of a query expression and returns documents that do not match the query expression.

$nor   => 	Joins query clauses with a logical NOR returns all documents that fail to match both clauses.

$or	  =>  Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

 */

const getDocumentThroughLogicalOperator = async () => {
  try {
    // 1. Select all the document that the ctype: 'BackEnd' or author: 'thapaTechnical'
    // const result = await PlayList.find({
    //   $or: [{ ctype: 'BackEnd' }, { author: 'thapaTechnical' }],
    // }).select({ name: 1 });

    // 2. Select all the document that the ctype: 'BackEnd' and author: 'thapaTechnical'
    // const result = await PlayList.find({
    //   $and: [{ ctype: 'BackEnd' }, { author: 'thapaTechnical' }],
    // }).select({ name: 1 });

    // 3. selects all documents in the collection where the ctype field value does not start with the letter F.
    const result = await PlayList.find({
      ctype: { $not: { $regex: '^F.*' } },
    }).select({ name: 1 });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
getDocumentThroughLogicalOperator();
