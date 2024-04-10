const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  image_url: {
    type: String,
    required: true,
  },
  name: {
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
  genre: {
    type: String,
    required: true,
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
  }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
