const mongoose = require('mongoose');
const MovieModel = require('../models/movie');

class TicketService {
  async createTicket(ticket, movie_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found');
    }

    const existingTicket = await MovieModel.findOne(
      {
        _id: movie,
        'session.tickets': { $elemMatch: { seat: ticket.seat } },
      },
      { 'session.tickets.$': 1 }
    );
    if (existingTicket != null) {
      throw new Error('Seat already taken!');
    }
    const tickets = movie.session.tickets;
    tickets.push(ticket);
    if (movie.session.tickets.length > movie.session.capacity) {
      throw new Error('Session is full!');
    }
    await movie.save();
    const newTicket = ticket;
    return newTicket;
  }

  async getTicket(movie_id, ticket_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    const tickets = movie.session.tickets;
    if (tickets == null) {
      throw new Error('Ticket not found');
    }
    const ticket = tickets.id(ticket_id);

    return ticket;
  }
}

module.exports = new TicketService();
