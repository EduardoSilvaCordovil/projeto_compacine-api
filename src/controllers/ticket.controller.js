const TicketService = require('../services/ticket.service');

class TicketController {
  async createTicket(req, res) {
    try {
      const ticket = await TicketService.createTicket(req.body);
      res.status(201).json(ticket);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getTickets(req, res) {
    try {
      const tickets = await TicketService.getTickets();
      res.status(200).json(tickets);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new TicketController();
