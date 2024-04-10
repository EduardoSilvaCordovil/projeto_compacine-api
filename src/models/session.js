const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  capacity: {
    type: Number,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
    unique: true,
  },
  room: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
    },
  ],
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
