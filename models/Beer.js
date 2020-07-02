const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
  },
  brewery: {
    type: String,
    required: [true, 'Please add a brewery name'],
  },
  country: {
    type: String,
    required: [true, 'Please choose a country'],
  },
  style: {
    type: String,
    required: [true, 'Please choose a style'],
  },
  abv: {
    type: String,
  },
  ibu: {
    type: String,
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating must can not be more than 5'],
    required: [true, 'Please rate a beer'],
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Beer', BeerSchema);
