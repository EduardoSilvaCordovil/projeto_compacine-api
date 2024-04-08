const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: String,
    },
  ],
  gender: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
