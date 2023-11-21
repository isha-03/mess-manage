const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  source: {
    type: String,
    required: false
  },
  dest: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: true
  },
  genderPreference: {
    type: [String],
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Trip', tripSchema);
