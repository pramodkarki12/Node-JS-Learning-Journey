const mongoose = require('mongoose');

/** Schema */
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  events: {
    type: String,
    default: '100m',
  },
});

/** model */
const mensRanking = new mongoose.model('mensRanking', menSchema);

module.exports = mensRanking;
