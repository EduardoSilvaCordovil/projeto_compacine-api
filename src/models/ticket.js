const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
