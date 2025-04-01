const mongoose = require('mongoose');

// create dog model
let DogModel = {};

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
    min: 0,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogModel = mongoose.model('Dod', dogSchema);
module.exports = DogModel;
