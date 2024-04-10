const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    required: true,
    min: [1, 'O número da cadeira deve ser igual ou superior a 1.'],
    validate: {
      validator: async function(seatValue) {
        const session = await mongoose.model('Session').findOne({ tickets: this._id });
        const seatNumber = parseInt(seatValue);
        return session && seatNumber <= session.capacity;
      },
      message: 'O número da cadeira deve ser menor ou igual que a capacidade da sessão.',
    },
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  },
});

ticketSchema.index({ seat: 1, session: 1 }, { unique: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
