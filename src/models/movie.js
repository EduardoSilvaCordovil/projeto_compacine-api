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
  sessions: [
    {
      session: {
        capacity: {
          type: Number,
          required: true,
        },
        room: {
          type: String,
          required: true,
        },
        tickets: [
          {
            seat: {
              type: Number,
              required: true,
              min: [1, 'O número da cadeira deve ser igual ou superior a 1.'],
            },
            price: {
              type: Number,
              required: true,
              min: 0,
            },
          },
        ],
      },
    },
  ],
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
