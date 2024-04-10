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

  async getTicket(id) {
    const ticket = TicketModel.findById(id);
    if (!ticket || ticket === null) {
      throw new Error('Ticket não encontrado');
    }
    return ticket;
  }

  async updateTicket(id, ticket) {
    const updatedTicket = await TicketModel.findByIdAndpdate(id, ticket, {
      new: true,
    });
    if (!updatedTicket) {
      throw new Error('Ticket não encontrado');
    }
    return updatedTicket;
  }

  async deleteTicket(id) {
    const ticket = await TicketModel.findByIdAndDelete(id);
    if (!ticket) {
      throw new Error('Ticket não encontrado');
    }
    return ticket;
  }
}

module.exports = new TicketService();
