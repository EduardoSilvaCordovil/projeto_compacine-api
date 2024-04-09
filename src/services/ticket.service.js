const TicketModel = require('../models/ticket');

class TicketService {
  async createTicket(ticket) {
    const newTicket = new TicketModel(ticket);
    await newTicket.save();
    return newTicket;
  }

  async getTickets() {
    return TicketModel.find();
  }
}

module.exports = new TicketService();
