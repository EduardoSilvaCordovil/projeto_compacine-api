const mongoose = require('mongoose');
const MovieModel = require('../models/movie');

class TicketService {
  async createTicket(ticket, movie_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    const tickets = movie.session.tickets;
    if (!tickets) {
      throw new Error('ticket not found');
    }
    tickets.push(ticket);
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

  async updateTicket(movie_id, session_id, ticket_id, ticket) {
    const updatedTicket = await MovieModel.findOneAndUpdate(
      {
        _id: movie_id,
        'sessions._id': session_id,
        'sessions.session.tickets._id': ticket_id,
      },
      {
        $set: {
          'sessions.$[outer].session.tickets.$[inner].seat': ticket.seat,
          'sessions.$[outer].session.tickets.$[inner].price': ticket.price,
        },
      },
      {
        arrayFilters: [{ 'outer._id': session_id }, { 'inner._id': ticket_id }],
        new: true,
      }
    );

    if (updatedTicket) {
      return this.getTicket(movie_id, session_id, ticket_id, ticket);
    } else {
      return { message: 'Ticket not found.' };
    }
  }

  async deleteTicket(movie_id, session_id, ticket_id) {
    const updatedTicket = await MovieModel.findOneAndUpdate(
      {
        _id: movie_id,
        'sessions._id': session_id,
        'sessions.session.tickets._id': ticket_id,
      },
      { $pull: { 'sessions.$.session.tickets': { _id: ticket_id } } },
      { new: true }
    );
    if (updatedTicket) {
      return { message: 'ticket removed successfully!' };
    } else {
      return { message: 'Ticket not found.' };
    }
  }
}

module.exports = new TicketService();
