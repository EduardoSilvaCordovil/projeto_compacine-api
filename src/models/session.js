const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  schedule: {
    type: Date,
    required: true,
  },
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
      type: String,
      required: true,
    },
  ],
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
